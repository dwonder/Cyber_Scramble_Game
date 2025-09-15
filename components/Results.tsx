
import React from 'react';
import Button from './Button';
import HighScores from './HighScores';
import type { HighScore } from '../types';

interface ResultsProps {
  score: number;
  totalQuestions: number;
  onPlayAgain: () => void;
  nickname: string;
  highScores: HighScore[];
  personalBest?: number;
  timeCompleted: number | null;
}

const getFeedback = (score: number, total: number, nickname: string): { title: string; message: string; emoji: string } => {
  const percentage = (score / total) * 100;
  if (percentage >= 90) {
    return { title: `You're a Cyber Hero, ${nickname}!`, message: "All tickets closed with flying colors. The network is safe in your hands!", emoji: "🦸" };
  } else if (percentage >= 70) {
    return { title: `Skilled Technician, ${nickname}!`, message: "Great job! You've successfully resolved most of the critical issues.", emoji: "🧑‍💻" };
  } else if (percentage >= 50) {
    return { title: `Promising Recruit, ${nickname}`, message: "A solid effort! A little more training and you'll be a pro.", emoji: "👍" };
  } else {
    return { title: "Ticket Escalated", message: `We've forwarded your results to the IT department, ${nickname}. Mandatory training is scheduled.`, emoji: "😩" };
  }
};

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

const Results: React.FC<ResultsProps> = ({ score, totalQuestions, onPlayAgain, nickname, highScores, personalBest, timeCompleted }) => {
  const { title, message, emoji } = getFeedback(score, totalQuestions, nickname);
  const isNewPersonalBest = personalBest === undefined || score > personalBest;

  return (
    <div className="bg-[#2b2b2b] rounded-xl p-8 text-center max-w-2xl mx-auto border-2 border-gray-700 shadow-xl">
      <div className="text-6xl mb-4">{emoji}</div>
      <h2 className="text-3xl font-bold text-[#ffcc00] mb-2">{title}</h2>
      <p className="text-xl text-slate-200 mb-1">
        You answered <span className="font-bold text-white">{score}</span> out of <span className="font-bold text-white">{totalQuestions}</span> questions correctly.
      </p>

      {timeCompleted !== null && (
        <p className="text-md text-slate-400 mb-2">
            Completed in: <span className="font-bold text-white font-mono">{formatTime(timeCompleted)}</span>
        </p>
      )}

      <div className="h-12 my-2 flex items-center justify-center">
        {isNewPersonalBest && score > 0 && (
          <div
            className="bg-yellow-400/10 border border-yellow-600 text-[#ffcc00] px-4 py-2 rounded-lg inline-flex items-center gap-2"
            style={{ animation: 'float-up 0.5s ease-out' }}
          >
            <span className="text-xl">🏆</span>
            <span className="font-bold">New Personal Best!</span>
          </div>
        )}
        {!isNewPersonalBest && typeof personalBest === 'number' && (
           <p className="text-slate-400">
             Your Best: <span className="font-bold text-white">{personalBest}</span>
           </p>
        )}
      </div>

      <p className="text-slate-400 mb-8">{message}</p>
      <Button onClick={onPlayAgain}>
        Play Again
      </Button>
      <HighScores scores={highScores} />
    </div>
  );
};

export default Results;
