// NestedCommandHandler.tsx
import React, { useState, useCallback, useEffect } from 'react';
import { categories, Link } from './categories';

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

interface CommandHandlerProps {
  setHistory: React.Dispatch<React.SetStateAction<CommandHistory[]>>;
  inputRef?: React.RefObject<HTMLInputElement>;
  closeModal: () => void; // Add closeModal prop
}

const NestedCommandHandler: React.FC<CommandHandlerProps> = ({ setHistory, inputRef, closeModal }) => {
  const [input, setInput] = useState('');
  const [links, setLinks] = useState<Link[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Mapping from hyphenated commands to camelCase keys
  const commandMap: { [key: string]: string } = {
    'patterns': 'patterns',
    'collective': 'collective',
    'regenerative': 'regenerative',
    'anti-rivalrous': 'antiRivalrous',
    'long-term': 'longTerm',
    'coherence': 'coherence',
    'emergent': 'emergent',
    'main': 'main', // Add main command
  };

  const handleCommand = useCallback((cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    let output: React.ReactNode;
    const mappedCmd = commandMap[trimmedCmd];

    if (mappedCmd === 'main') {
      closeModal(); // Close the nested terminal if the command is 'main'
      return;
    } else if (mappedCmd && mappedCmd in categories) {
      const categoryLinks = categories[mappedCmd];
      setLinks(categoryLinks);
      setSelectedIndex(0); // Set the first link as selected by default
      output = (
        <div className="space-y-2">
          {categoryLinks.map((link, index) => (
            <div key={index} className={index === selectedIndex ? 'bg-blue-100' : ''}>
              <a
                href={link.url}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.title}
              </a>
            </div>
          ))}
        </div>
      );
    } else if (trimmedCmd === 'clear') {
      // Reset history to only include the initial welcome message
      setHistory([]);
      setLinks([]);
      setSelectedIndex(null);
      return;
    } else if (trimmedCmd === 'help') {
      output = (
        <div className="text-emerald-400">
          <p className="mb-1">[Available Commands]</p>
          <ul className="ml-4 space-y-1">
            <li>patterns - View regenerative patterns</li>
            <li>collective - View collective intelligence resources</li>
            <li>regenerative - View regenerative design resources</li>
            <li>anti-rivalrous - View anti-rivalrous dynamics resources</li>
            <li>long-term - View long-term thinking resources</li>
            <li>coherence - View coherent pluralism resources</li>
            <li>emergent - View emergent properties resources</li>
            <li>clear - Clear terminal screen</li>
            <li>main - Return to main terminal</li> {/* Add main command to help */}
            <li>help - Display available commands</li>
          </ul>
        </div>
      );
    } else {
      output = <p className="text-red-500">Command not found: {trimmedCmd}</p>;
    }

    // Append the command and output, followed by the help prompt
    setHistory([
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
  }, [setHistory, closeModal, setSelectedIndex, setLinks]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (selectedIndex !== null && links[selectedIndex]) {
        window.open(links[selectedIndex].url, '_blank');
      } else {
        handleSubmit(e);
      }
    } else if (e.key === 'ArrowUp') {
      if (selectedIndex !== null && selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
      }
    } else if (e.key === 'ArrowDown') {
      if (selectedIndex !== null && selectedIndex < links.length - 1) {
        setSelectedIndex(selectedIndex + 1);
      }
    }
  }, [handleSubmit, links, selectedIndex, setSelectedIndex]);

  useEffect(() => {
    // Focus the input field when the component mounts
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

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
        ref={inputRef}
        autoFocus
      />
    </form>
  );
};

export default NestedCommandHandler;