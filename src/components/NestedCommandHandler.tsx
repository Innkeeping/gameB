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
  const [mode, setMode] = useState<'command' | 'navigation'>('command'); // Track the current mode

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
      setMode('navigation'); // Switch to navigation mode
      output = (
        <div className="space-y-2">
          {categoryLinks.map((link, linkIndex) => (
            <div key={linkIndex}>
              <span className="font-medium">{link.title}</span>
              <ul className="ml-4 space-y-1">
                {link.urls.map((url, urlIndex) => {
                  const flatIndex = linkIndex === 0 ? urlIndex : links.slice(0, linkIndex).reduce((sum, l) => sum + l.urls.length, 0) + urlIndex;
                  return (
                    <li key={urlIndex} className={flatIndex === selectedIndex ? 'bg-blue-200 p-1 rounded' : 'p-1'}>
                      <a
                        href={url}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {url}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      );
    } else if (trimmedCmd === 'clear') {
      // Reset history to only include the initial welcome message
      setHistory([]);
      setLinks([]);
      setSelectedIndex(null);
      setMode('command'); // Switch to command mode
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
  }, [setHistory, closeModal, setLinks, setSelectedIndex, setMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log('Key pressed:', e.key);

    if (mode === 'command') {
      if (e.key === 'Enter') {
        handleSubmit(e);
      }
    } else if (mode === 'navigation') {
      if (e.key === 'Enter' || e.key === ' ') {
        if (selectedIndex !== null) {
          const flatIndex = selectedIndex;
          let cumulativeIndex = 0;

          for (const link of links) {
            if (flatIndex < cumulativeIndex + link.urls.length) {
              const urlIndex = flatIndex - cumulativeIndex;
              console.log('Opening URL:', link.urls[urlIndex]);
              window.open(link.urls[urlIndex], '_blank');
              break;
            }
            cumulativeIndex += link.urls.length;
          }
        }
      } else if (e.key === 'ArrowUp') {
        if (selectedIndex !== null && selectedIndex > 0) {
          setSelectedIndex(selectedIndex - 1);
        }
      } else if (e.key === 'ArrowDown') {
        if (selectedIndex !== null) {
          let totalUrls = links.reduce((sum, link) => sum + link.urls.length, 0);
          if (selectedIndex < totalUrls - 1) {
            setSelectedIndex(selectedIndex + 1);
          }
        }
      } else if (e.key === 'Escape') {
        // Exit navigation mode and clear links
        setLinks([]);
        setSelectedIndex(null);
        setMode('command');
        setInput('');
      } else {
        // If any other key is pressed, switch to command mode and retain the character
        setLinks([]);
        setSelectedIndex(null);
        setMode('command');
        setInput(e.key); // Set input to the current key
        e.preventDefault(); // Prevent the key from being added to input twice
      }
    }
  }, [handleSubmit, links, selectedIndex, setSelectedIndex, mode, setMode, setInput]);

  useEffect(() => {
    // Focus the input field when the component mounts
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  useEffect(() => {
    console.log('Links:', links);
    console.log('Selected Index:', selectedIndex);
    console.log('Mode:', mode);
  }, [links, selectedIndex, mode]);

  return (
    <div>
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
      <div className="mt-4">
        {links.map((link, linkIndex) => (
          <div key={linkIndex}>
            <span className="font-medium">{link.title}</span>
            <ul className="ml-4 space-y-1">
              {link.urls.map((url, urlIndex) => {
                const flatIndex = linkIndex === 0 ? urlIndex : links.slice(0, linkIndex).reduce((sum, l) => sum + l.urls.length, 0) + urlIndex;
                return (
                  <li key={urlIndex} className={flatIndex === selectedIndex ? 'bg-blue-200 p-1 rounded' : 'p-1'}>
                    <a
                      href={url}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {url}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NestedCommandHandler;