// CommandHandler.tsx
import React, { useState, useCallback } from 'react';
// import { CommandFunction } from './types';
import { commands } from './commands';

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

interface CommandHandlerProps {
  setHistory: React.Dispatch<React.SetStateAction<CommandHistory[]>>;
}

const CommandHandler: React.FC<CommandHandlerProps> = ({ setHistory }) => {
  const [input, setInput] = useState('');

  const handleCommand = useCallback((cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const commandFn = commands[trimmedCmd as keyof typeof commands];

    if (commandFn) {
      const output = commandFn();
      if (output !== null) {
        setHistory(prev => [...prev, { command: cmd, output }]);
      } else if (trimmedCmd === 'clear') {
        // Reset history to only include the initial welcome message
        setHistory([
          {
            command: '',
            output: (
              <pre className="mb-4 text-emerald-400 whitespace-pre-wrap break-words">
{`
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 ██████████████████████████▀
 ██    GAME B TERMINAL   ██
 ██████████████████████████

[SYSTEM] Welcome, Seeker. Type 'begin' to start your journey or 'help' for available commands.
`}
              </pre>
            ),
          },
        ]);
      }
    } else if (trimmedCmd) {
      setHistory(prev => [...prev, {
        command: cmd,
        output: <p className="text-red-500">Command not found: {trimmedCmd}</p>
      }]);
    }
  }, [setHistory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  }, [handleSubmit]);

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 flex-wrap">
      <span className="text-emerald-600">seeker@game-b</span>
      <span className="text-emerald-400">:~$</span>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 min-w-[200px] bg-transparent outline-none text-emerald-400"
        autoFocus
      />
    </form>
  );
};

export default CommandHandler;