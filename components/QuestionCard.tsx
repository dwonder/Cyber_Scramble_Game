import React from 'react';
import type { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  userAnswer: string;
  onAnswerChange: (id: number, answer: string) => void;
  isFinished: boolean;
  isCorrect?: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, userAnswer, onAnswerChange, isFinished, isCorrect }) => {
  const { id, level, scrambled, hint, answer } = question;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onAnswerChange(id, e.target.value);
  };

  const getLetterAnimation = (index: number) => {
    let animationName = 'float-up';
    let duration = '0.4s';
    let timingFunction = 'ease-out';

    if (isFinished) {
      if (isCorrect) {
        animationName = 'fly-out';
        duration = '0.5s';
        timingFunction = 'ease-in';
      } else {
        animationName = 'wobble';
        duration = '0.6s';
        timingFunction = 'ease-in-out';
      }
    }

    return { 
      animation: `${animationName} ${duration} ${timingFunction} forwards`, 
      animationDelay: `${index * 50}ms` 
    };
  };

  const borderClass = isFinished 
    ? (isCorrect ? 'border-green-500' : 'border-[#cc0000]') 
    : 'border-gray-700 hover:border-[#ffcc00]';

  return (
    <div className={`bg-[#2b2b2b] rounded-xl p-6 flex flex-col h-full shadow-lg border-2 ${borderClass} transition-colors duration-300`}>
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-lg font-bold text-[#ffcc00]">Helpdesk Ticket #{id}</h2>
        <span className="text-xs font-medium bg-gray-700 text-slate-300 px-2 py-1 rounded-full">{level}</span>
      </div>
      
      <div className="flex flex-wrap gap-2 justify-center my-4 min-h-[3.5rem] sm:min-h-[4rem]">
        {scrambled.map((letter, index) => (
          <div 
            key={index} 
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-800 text-slate-100 font-mono text-lg font-bold rounded-md"
            style={getLetterAnimation(index)}
          >
            {letter}
          </div>
        ))}
      </div>

      <p className="text-slate-400 text-sm mb-5 flex-grow">
        <span className="font-semibold text-slate-200">Hint:</span> {hint}
      </p>

      <input
        type="text"
        value={userAnswer}
        onChange={handleInputChange}
        placeholder="Your answer..."
        disabled={isFinished}
        className="w-full bg-[#1a1a1a] border-2 border-gray-600 rounded-md px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#ffcc00] focus:border-[#ffcc00] transition-colors disabled:bg-gray-800 disabled:cursor-not-allowed"
        aria-label={`Answer for ticket #${id}`}
      />
      {isFinished && !isCorrect && (
        <p className="mt-2 text-sm text-[#ff6666] text-center">
          Correct answer: <span className="font-bold">{answer}</span>
        </p>
      )}
    </div>
  );
};

export default QuestionCard;