import React from 'react';
import type { HighScore } from '../types';

interface HighScoresProps {
  scores: HighScore[];
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const HighScores: React.FC<HighScoresProps> = ({ scores }) => {
  if (scores.length === 0) {
    return null;
  }

  return (
    <div className="mt-10" style={{ animation: 'float-up 0.5s 0.3s ease-out forwards', opacity: 0 }}>
      <h3 className="text-2xl font-bold text-slate-200 mb-4 border-b-2 border-gray-700 pb-2">
        Hall of Fame
      </h3>
      <ul className="space-y-3 mt-4">
        {scores.map((score, index) => (
          <li
            key={`${score.nickname}-${score.date}`}
            className="flex items-center justify-between bg-[#1a1a1a] p-3 rounded-lg shadow-inner"
            style={{ animation: 'float-up 0.5s ease-out forwards', animationDelay: `${500 + index * 100}ms`, opacity: 0 }}
          >
            <div className="flex items-center">
              <span className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm mr-4 shrink-0 ${index < 3 ? 'bg-[#ffcc00] text-black' : 'bg-gray-700 text-slate-200'}`}>
                {index + 1}
              </span>
              <div className="truncate">
                <p className="font-semibold text-lg text-white truncate">{score.nickname}</p>
                <p className="text-xs text-slate-400">{formatDate(score.date)}</p>
              </div>
            </div>
            <span className="font-mono text-xl font-bold text-[#ffcc00] ml-4">{score.score} pts</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HighScores;
