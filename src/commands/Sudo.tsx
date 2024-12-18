// SudoCommand.tsx
import React from 'react'

interface SudoProps {
  setSudoAttempts: React.Dispatch<React.SetStateAction<number>>;
}

const Sudo: React.FC<SudoProps> = ({ setSudoAttempts }) => {
  const messages = [
    "Access denied: Game A permissions not valid here",
    "Nice try. Game B requires different thinking.",
    "Hierarchy-based commands have no power here.",
    "Power emerges from connection, not control...",
    "Perhaps it's time to explore 'patterns' instead?"
  ];


  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  const handleClick = () => {
    setSudoAttempts(prev => prev + 1);

  };

  return (
    <p className="text-red-500" onClick={handleClick}>
      {randomMessage}
    </p>
  )
}

export default Sudo