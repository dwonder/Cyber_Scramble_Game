import React from 'react';

interface TimerProps {
  seconds: number;
}

const Timer: React.FC<TimerProps> = ({ seconds }) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const isUrgent = seconds <= 10;

  return (
    <div className="text-center">
      <span className="text-lg font-medium text-slate-400">Time Left: </span>
      <span 
        className={`text-2xl font-bold font-mono transition-colors duration-300 ${isUrgent ? 'text-red-500' : 'text-white'}`}
        style={isUrgent ? { animation: 'pulse-scale 1.5s ease-in-out infinite' } : undefined}
        aria-live="polite"
        aria-atomic="true"
      >
        {String(minutes).padStart(2, '0')}:{String(remainingSeconds).padStart(2, '0')}
      </span>
    </div>
  );
};

export default Timer;
