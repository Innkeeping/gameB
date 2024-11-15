// Terminal.tsx
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { CommandOutput } from './types';
import { commands } from './commands';
import CommandHandler from './CommandHandler';

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

function Terminal() {
  const [history, setHistory] = useState<CommandHistory[]>([
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
  const [sudoAttempts, setSudoAttempts] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputHistory, setInputHistory] = useState<string[]>([]);
  const [inputHistoryIndex, setInputHistoryIndex] = useState<number>(-1);

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

            <CommandHandler setHistory={setHistory} />
            <div ref={terminalRef} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal;