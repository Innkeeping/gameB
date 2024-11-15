import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { CommandOutput } from './types';
import { commands } from './commands';

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [sudoAttempts, setSudoAttempts] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      const scrollOptions: ScrollIntoViewOptions = {
        behavior: 'instant',
        block: 'end',
      };
      terminalRef.current.scrollIntoView(scrollOptions);
      inputRef.current?.focus();
    }
  }, [history]);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const commandFn = commands[trimmedCmd as keyof typeof commands];
    
    if (commandFn) {
      const output = commandFn(setSudoAttempts);
      if (output !== null) {
        setHistory(prev => [...prev, { command: cmd, output }]);
      }
    } else if (trimmedCmd) {
      setHistory(prev => [...prev, {
        command: cmd,
        output: <p className="text-red-500">Command not found: {trimmedCmd}</p>
      }]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div className="min-h-screen bg-black text-emerald-400 p-2 font-mono">
      <div className="max-w-3xl mx-auto">
        <div 
          className="bg-black rounded border border-emerald-900"
          onClick={handleTerminalClick}
        >
          <div className="flex items-center gap-2 px-3 py-1 bg-emerald-900/30 border-b border-emerald-900">
            <TerminalIcon size={14} />
            <span className="text-xs">seeker@game-b:~</span>
          </div>

          <div className="p-3 h-[90vh] overflow-y-auto">
            <pre className="mb-4 text-emerald-400 whitespace-pre-wrap break-words">
{`
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 ██████████████████████████▀
 ██    GAME B TERMINAL   ██
 ██████████████████████████
 
[SYSTEM] Welcome, Seeker. Type 'begin' to start your journey or 'help' for available commands.
`}</pre>

            {history.map((entry, i) => (
              <div key={i} className="mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-emerald-600">seeker@game-b</span>
                  <span className="text-emerald-400">:~$</span>
                  <span className="break-all">{entry.command}</span>
                </div>
                <div className="mt-1 whitespace-pre-wrap break-words">{entry.output}</div>
              </div>
            ))}

            <form onSubmit={handleSubmit} className="flex items-center gap-2 flex-wrap">
              <span className="text-emerald-600">seeker@game-b</span>
              <span className="text-emerald-400">:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 min-w-[200px] bg-transparent outline-none text-emerald-400"
                autoFocus
              />
            </form>
            <div ref={terminalRef} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal;