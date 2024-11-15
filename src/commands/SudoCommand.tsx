// SudoCommand.tsx
import React from 'react';

interface SudoCommandProps {
  setSudoAttempts: React.Dispatch<React.SetStateAction<number>>;
}

const SudoCommand: React.FC<SudoCommandProps> = ({ setSudoAttempts }) => {
  const messages = [
    "Access denied: Game A permissions not valid here",
    "Nice try. Game B requires different thinking.",
    "Hierarchy-based commands have no power here.",
    "Power emerges from connection, not control...",
    "Perhaps it's time to explore 'patterns' instead?"
  ];

  // Generate a random message when the component is created
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  const handleClick = () => {
    setSudoAttempts(prev => prev + 1);
    // Optionally, you can generate a new random message here if you want to change the message on each click
    // const newRandomMessage = messages[Math.floor(Math.random() * messages.length)];
    // console.log(newRandomMessage); // For debugging
  };

  return (
    <p className="text-red-500" onClick={handleClick}>
      {randomMessage}
    </p>
  );
};

export default SudoCommand;