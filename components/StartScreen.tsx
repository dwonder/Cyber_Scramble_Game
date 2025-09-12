import React, { useState } from 'react';
import Header from './Header';
import Button from './Button';

interface StartScreenProps {
  onStartGame: (nickname: string) => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStartGame }) => {
  const [nickname, setNickname] = useState('');

  const handleStart = () => {
    if (nickname.trim().length >= 3) {
      onStartGame(nickname.trim());
    }
  };

  const isButtonDisabled = nickname.trim().length < 3;

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        <Header />
        <div className="bg-[#2b2b2b] rounded-xl p-8 text-center border-2 border-gray-700 shadow-xl mt-[-2rem]">
          <h2 className="text-2xl font-bold text-slate-200 mb-4">Enter Your Callsign</h2>
          <p className="text-slate-400 mb-6">
            Let the helpdesk know who's closing these tickets.
          </p>
          <form onSubmit={(e) => { e.preventDefault(); handleStart(); }}>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Min. 3 characters..."
              maxLength={20}
              className="w-full max-w-sm mx-auto bg-[#1a1a1a] border-2 border-gray-600 rounded-md px-4 py-3 text-slate-100 font-mono text-center text-lg focus:outline-none focus:ring-2 focus:ring-[#ffcc00] focus:border-[#ffcc00] transition-colors"
              aria-label="Enter your nickname"
              autoFocus
            />
            <div className="mt-8">
              <Button onClick={handleStart} disabled={isButtonDisabled}>
                Start Hacking
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
