import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-[#ffcc00] text-black font-bold py-3 px-8 rounded-lg shadow-md transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-4 focus:ring-yellow-300 disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed enabled:hover:bg-yellow-500 enabled:hover:shadow-lg enabled:hover:-translate-y-1"
    >
      {children}
    </button>
  );
};

export default Button;
