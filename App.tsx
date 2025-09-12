
import React, { useState, useCallback, useEffect } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { GameState } from './types';
import type { UserAnswers, Question, SourceQuestion, HighScore, PersonalBests } from './types';
import { questions as sourceQuestions, GAME_DURATION } from './constants';
import Header from './components/Header';
import QuestionCard from './components/QuestionCard';
import Results from './components/Results';
import Button from './components/Button';
import Timer from './components/Timer';
import MuteButton from './components/MuteButton';
import StartScreen from './components/StartScreen';

const SOUNDS = {
  CORRECT: 'https://aistudiocdn.com/games/cyber-scramble/correct.mp3',
  INCORRECT: 'https://aistudiocdn.com/games/cyber-scramble/incorrect.mp3',
  SUBMIT: 'https://aistudiocdn.com/games/cyber-scramble/submit.mp3',
  CLICK: 'https://aistudiocdn.com/games/cyber-scramble/click.mp3',
};

// --- New Simplified Audio Manager ---
const audioManager = {
  isInitialized: false,

  /**
   * Initializes the audio manager by pre-caching all game sounds.
   * This hints the browser to download the audio files so they are ready for instant playback.
   */
  init() {
    // Avoid re-initializing
    if (this.isInitialized) return;
    this.isInitialized = true; // Set immediately to prevent multiple calls

    console.log("Preloading audio...");
    Object.values(SOUNDS).forEach(src => {
      const audio = new Audio();
      audio.src = src;
      audio.preload = 'auto';
      audio.load();
      audio.addEventListener('error', (e) => {
        console.error(`Failed to preload sound: ${src}`, e);
      });
    });
  },

  /**
   * Plays a sound. Creates a new Audio object for each playback
   * to allow for overlapping sounds. Relies on browser caching for speed.
   * @param src The source URL of the sound to play.
   */
  play(src: string) {
    try {
        const audio = new Audio(src);
        audio.play().catch(e => {
            // This can happen if the user hasn't interacted with the page yet,
            // which is a common browser security policy.
            console.warn(`Audio playback for ${src} was blocked by the browser:`, e.message);
        });
    } catch (e) {
      console.error(`Could not play sound ${src}:`, e);
    }
  }
};
// --- End New Simplified Audio Manager ---

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const prepareGameQuestions = (questions: SourceQuestion[]): Question[] => {
  const shuffledQuestions = shuffleArray(questions);
  return shuffledQuestions.map((q, index) => {
    let scrambledLetters = shuffleArray(q.answer.split(''));
    // Re-shuffle if it matches the answer, for words longer than 1 letter
    while (scrambledLetters.join('') === q.answer && q.answer.length > 1) {
        scrambledLetters = shuffleArray(q.answer.split(''));
    }
    return {
      ...q,
      id: index + 1,
      scrambled: scrambledLetters,
    };
  });
};

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.StartScreen);
  const [nickname, setNickname] = useState<string>('');
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [score, setScore] = useState<number | null>(null);
  const [correctness, setCorrectness] = useState<{[key: number]: boolean}>({});
  const [gameQuestions, setGameQuestions] = useState<Question[]>([]);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(() => {
    return localStorage.getItem('cyberScrambleMuted') === 'true';
  });
  const [highScores, setHighScores] = useState<HighScore[]>([]);
  const [personalBests, setPersonalBests] = useState<PersonalBests>({});

  const playSound = useCallback((src: string) => {
    if (isMuted) return;
    audioManager.play(src);
  }, [isMuted]);

  const handleMuteToggle = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    localStorage.setItem('cyberScrambleMuted', String(newMutedState));
    // Play a click sound on unmute for feedback
    if (!newMutedState) {
        audioManager.play(SOUNDS.CLICK);
    }
  };

  const fetchNewQuestions = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "Generate 15 unique word scramble puzzles about common IT and technical jargon. The puzzles should cover a range of difficulties. For each puzzle, provide a non-technical hint and a single-word, uppercase answer. Format the output as a JSON array of objects, where each object has 'level', 'hint', and 'answer' properties.",
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                level: { type: Type.STRING },
                hint: { type: Type.STRING },
                answer: { type: Type.STRING },
              },
            },
          },
        },
      });

      let parsedQuestions: any[];
      try {
        parsedQuestions = JSON.parse(response.text);
      } catch (e) {
        throw new Error("Failed to parse API response as JSON");
      }
      
      if (!Array.isArray(parsedQuestions)) {
        throw new Error("Invalid response from API: not an array.");
      }
      
      const validQuestions = parsedQuestions
        .filter(
          (q): q is SourceQuestion =>
            q &&
            typeof q.level === 'string' &&
            typeof q.hint === 'string' &&
            typeof q.answer === 'string' &&
            q.answer.trim() !== ''
        )
        .map(q => ({
          ...q,
          answer: q.answer.trim().toUpperCase().split(' ')[0], // Sanitize answer
        }));

      if (validQuestions.length === 0) {
        throw new Error("API response contained no valid questions");
      }
      
      setGameQuestions(prepareGameQuestions(validQuestions));
    } catch (err) {
      console.error("Failed to fetch new questions:", err);
      setError("Could not generate new puzzles. Playing a default round!");
      setGameQuestions(prepareGameQuestions(sourceQuestions));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    audioManager.init();
    try {
      const storedScores = localStorage.getItem('cyberScrambleHighScores');
      if (storedScores) {
        setHighScores(JSON.parse(storedScores));
      }
      const storedPersonalBests = localStorage.getItem('cyberScramblePersonalBests');
      if (storedPersonalBests) {
          setPersonalBests(JSON.parse(storedPersonalBests));
      }
    } catch (e) {
      console.error("Failed to load data from localStorage", e);
    }
  }, []);

  const handleStartGame = useCallback((name: string) => {
    playSound(SOUNDS.CLICK);
    setNickname(name);
    setGameState(GameState.Playing);
    fetchNewQuestions();
  }, [playSound, fetchNewQuestions]);


  const handleAnswerChange = useCallback((id: number, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [id]: answer }));
  }, []);

  const handleSubmit = useCallback(() => {
    if (gameState === GameState.Finished) return;

    let currentScore = 0;
    const correctnessMap: {[key: number]: boolean} = {};
    gameQuestions.forEach(q => {
      const userAnswer = userAnswers[q.id]?.trim().toUpperCase();
      const isCorrect = userAnswer === q.answer;
      if (isCorrect) {
        currentScore++;
      }
      correctnessMap[q.id] = isCorrect;
    });
    setCorrectness(correctnessMap);
    setScore(currentScore);
    setGameState(GameState.Finished);
    window.scrollTo(0, 0);

    // Update Personal Best
    setPersonalBests(prevBests => {
        const currentBest = prevBests[nickname] || 0;
        if (currentScore > currentBest) {
            const updatedBests = { ...prevBests, [nickname]: currentScore };
            try {
                localStorage.setItem('cyberScramblePersonalBests', JSON.stringify(updatedBests));
            } catch (e) {
                console.error("Failed to save personal bests to localStorage", e);
            }
            return updatedBests;
        }
        return prevBests;
    });

    const newScoreEntry: HighScore = { 
        nickname, 
        score: currentScore, 
        date: new Date().toISOString() 
    };
    
    setHighScores(prevHighScores => {
        const updatedScores = [...prevHighScores, newScoreEntry]
          .sort((a, b) => {
            if (b.score !== a.score) {
              return b.score - a.score;
            }
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          })
          .slice(0, 10);

        try {
            localStorage.setItem('cyberScrambleHighScores', JSON.stringify(updatedScores));
        } catch (e) {
            console.error("Failed to save high scores to localStorage", e);
        }

        return updatedScores;
    });

    playSound(SOUNDS.SUBMIT);
    
    gameQuestions.forEach((q, index) => {
      setTimeout(() => {
        playSound(correctnessMap[q.id] ? SOUNDS.CORRECT : SOUNDS.INCORRECT);
      }, 300 + index * 100);
    });
  }, [userAnswers, gameQuestions, gameState, playSound, nickname]);

  const handlePlayAgain = useCallback(() => {
    playSound(SOUNDS.CLICK);
    setGameState(GameState.Playing);
    setUserAnswers({});
    setScore(null);
    setCorrectness({});
    setTimeLeft(GAME_DURATION);
    fetchNewQuestions();
  }, [playSound, fetchNewQuestions]);

  useEffect(() => {
    if (gameState !== GameState.Playing || isLoading) {
      return;
    }
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [gameState, timeLeft, handleSubmit, isLoading]);

  if (gameState === GameState.StartScreen) {
    return <StartScreen onStartGame={handleStartGame} />;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center text-center p-4">
        <div className="loader mb-4"></div>
        <h1 className="text-2xl font-bold text-[#ffcc00]">Generating New Puzzles...</h1>
        <p className="text-slate-400">Please wait a moment.</p>
      </div>
    );
  }

  const isFinished = gameState === GameState.Finished;

  return (
    <div className="min-h-screen bg-[#1a1a1a] font-sans">
      {gameState === GameState.Playing && (
        <div className="sticky top-0 z-10 bg-[#1a1a1a]/80 backdrop-blur-sm shadow-lg py-3">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative flex justify-center items-center">
                <Timer seconds={timeLeft} />
                <div className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2">
                    <MuteButton isMuted={isMuted} onClick={handleMuteToggle} />
                </div>
            </div>
        </div>
      )}

      <div className="p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <Header />

           {error && (
            <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg relative mb-6 text-center" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          
          {isFinished && score !== null && (
             <div className="mb-8">
              <Results 
                score={score} 
                totalQuestions={gameQuestions.length} 
                onPlayAgain={handlePlayAgain}
                nickname={nickname}
                highScores={highScores}
                personalBest={personalBests[nickname]}
              />
             </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameQuestions.map(question => (
              <QuestionCard
                key={question.id}
                question={question}
                userAnswer={userAnswers[question.id] || ''}
                onAnswerChange={handleAnswerChange}
                isFinished={isFinished}
                isCorrect={isFinished ? correctness[question.id] : undefined}
              />
            ))}
          </div>
          
          {gameState === GameState.Playing && (
            <div className="mt-8 text-center">
              <Button onClick={handleSubmit}>
                Submit Answers
              </Button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default App;