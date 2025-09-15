
import React from 'react';

interface HintCounterProps {
  count: number;
}

const LightbulbIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 01-8.486-3.734A5 5 0 017.514 9H16.486a5 5 0 01-3.734 8.486z" />
    </svg>
);

const HintCounter: React.FC<HintCounterProps> = ({ count }) => {
  return (
    <div className="flex items-center gap-2 text-slate-300" title={`${count} hints left`}>
        <span className="text-[#ffcc00]"><LightbulbIcon /></span>
        <span className="text-xl font-bold font-mono text-white">{count}</span>
        <span className="sr-only">{count} hints left</span>
    </div>
  );
};

export default HintCounter;
