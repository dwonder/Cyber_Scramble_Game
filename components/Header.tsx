import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#ffcc00] mb-3">
        Cyber Scramble
      </h1>
      <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
        The IT department's network has been hit by a digital alphabet soup! Use the hints to unscramble each puzzle and close the ticket.
      </p>
    </header>
  );
};

export default Header;