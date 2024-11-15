// commandHandler.tsx
import React, { useState, useCallback } from 'react';
import HelpCommand from '../commands/HelpCommand';
import BeginCommand from '../commands/BeginCommand';
import MetacrisisCommand from '../commands/MetacrisisCommand';
import GameACommand from '../commands/GameACommand';
import GameBCommand from '../commands/GameBCommand';
import PatternsCommand from '../commands/PatternsCommand';
import QuestCommand from '../commands/QuestCommand';
import StudyCommand from '../commands/StudyCommand';
import LocalCommand from '../commands/LocalCommand';
import ConnectCommand from '../commands/ConnectCommand';
import ExperimentCommand from '../commands/ExperimentCommand';
import ShareCommand from '../commands/ShareCommand';
import SudoCommand from '../commands/SudoCommand';

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

interface CommandHandlerProps {
  setHistory: React.Dispatch<React.SetStateAction<CommandHistory[]>>;
  openModal: () => void;
  resetHistory: () => void;
  setExpandedSection: (section: string | null) => void; // Add setExpandedSection prop
  expandedSection: string | null; // Add expandedSection prop
}

const CommandHandler: React.FC<CommandHandlerProps> = ({ setHistory, openModal, resetHistory, setExpandedSection, expandedSection }) => {
  const [input, setInput] = useState('');
  const [sudoAttempts, setSudoAttempts] = useState(0); // Manage sudoAttempts state

  const handleCommand = useCallback((cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    let output: React.ReactNode;

    switch (trimmedCmd) {
      case 'help':
        output = <HelpCommand />;
        break;
      case 'begin':
        output = <BeginCommand />;
        break;
      case 'metacrisis':
        output = <MetacrisisCommand />;
        break;
      case 'gamea':
        output = <GameACommand />;
        break;
      case 'gameb':
        output = <GameBCommand />;
        break;
      case 'patterns':
        output = <PatternsCommand />;
        break;
      case 'quest':
        output = <QuestCommand />;
        break;
      case 'study':
        output = <StudyCommand />;
        break;
      case 'local':
        output = <LocalCommand />;
        break;
      case 'connect':
        output = <ConnectCommand />;
        break;
      case 'experiment':
        output = <ExperimentCommand />;
        break;
      case 'share':
        output = <ShareCommand expandedSection={expandedSection} setExpandedSection={setExpandedSection} />;
        break;
      case '1':
        setExpandedSection('documentation');
        return;
      case '2':
        setExpandedSection('channels');
        return;
      case '3':
        setExpandedSection('methods');
        return;
      case 'clear':
        resetHistory();
        return;
      case 'terminal':
        openModal();
        return;
      case 'sudo':
        output = <SudoCommand setSudoAttempts={setSudoAttempts} />;
        break;
      default:
        output = <p className="text-red-500">Command not found: {trimmedCmd}</p>;
        break;
    }

    // Append the command and output, followed by the help prompt
    setHistory((prevHistory) => [
      ...prevHistory,
      { command: cmd, output },
      {
        command: '',
        output: (
          <div className="text-emerald-400">
            Type 'help' to see available commands.
          </div>
        ),
      },
    ]);

    // Optionally, you can also log the sudoAttempts count
    console.log(`Sudo attempts: ${sudoAttempts}`);
  }, [setHistory, openModal, sudoAttempts, resetHistory, setExpandedSection, expandedSection]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 flex-wrap">
      <span className="text-emerald-600">seeker@game-b</span>
      <span className="text-emerald-400">:~$</span>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 min-w-[200px] bg-transparent outline-none text-emerald-400"
        autoFocus
      />
    </form>
  );
};

export default CommandHandler;