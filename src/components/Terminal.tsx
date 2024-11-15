// Terminal.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import CommandHandler from './CommandHandler';
import NestedCommandHandler from './NestedCommandHandler';
// import { commands } from './commands';

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

const initialNestedHistory: CommandHistory[] = [
  {
    command: '',
    output: (
      <div className="text-emerald-400">
        Type 'help' to see available commands.
      </div>
    ),
  },
];

function Terminal() {
  const [mainHistory, setMainHistory] = useState<CommandHistory[]>([
    {
      command: '',
      output: (
        <pre className="mb-4 text-emerald-400 whitespace-pre-wrap break-words">
          {`
░██████╗░░█████╗░███╗░░░███╗███████╗░░░░░░██████╗░
██╔════╝░██╔══██╗████╗░████║██╔════╝░░░░░░██╔══██╗
██║░░██╗░███████║██╔████╔██║█████╗░░█████╗██████╦╝
██║░░╚██╗██╔══██║██║╚██╔╝██║██╔══╝░░╚════╝██╔══██╗
╚██████╔╝██║░░██║██║░╚═╝░██║███████╗░░░░░░██████╦╝
░╚═════╝░╚═╝░░╚═╝╚═╝░░░░░╚═╝╚══════╝░░░░░░╚═════╝░

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

  const [nestedHistory, setNestedHistory] = useState<CommandHistory[]>(initialNestedHistory);

  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nestedTerminalRef = useRef<HTMLDivElement>(null);
  const nestedInputRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (terminalRef.current) {
      const scrollOptions: ScrollIntoViewOptions = {
        behavior: 'instant',
        block: 'end',
      };
      terminalRef.current.scrollIntoView(scrollOptions);
      inputRef.current?.focus();
    }
  }, [mainHistory]);

  useEffect(() => {
    if (nestedTerminalRef.current) {
      nestedTerminalRef.current.scrollTop = nestedTerminalRef.current.scrollHeight; // Scroll to the bottom
    }
    if (isModalOpen) {
      nestedInputRef.current?.focus(); // Focus the nested input field when modal is open
    } else {
      inputRef.current?.focus(); // Focus the main input field when modal is closed
    }
  }, [nestedHistory, isModalOpen]);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const openModal = () => {
    setIsModalOpen(true);
    setNestedHistory(initialNestedHistory);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
            {mainHistory.map((entry, i) => (
              <div key={i} className="mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-emerald-600">seeker@game-b</span>
                  <span className="text-emerald-400">:~$</span>
                  <span className="break-all">{entry.command}</span>
                </div>
                <div className="mt-1 whitespace-pre-wrap break-words">{entry.output}</div>
              </div>
            ))}

            <CommandHandler setHistory={setMainHistory} openModal={openModal} />
            <div ref={terminalRef} />
          </div>
        </div>

        {/* Modal */}
        <input type="checkbox" id="my-modal" className="modal-toggle" checked={isModalOpen} onChange={closeModal} />
        <div className="modal">
          <div className="modal-box relative w-[80vw] max-w-4xl">
            <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={closeModal}>✕</label>
            <h3 className="font-bold text-lg">Nested Terminal</h3>
            <div className="bg-black rounded border border-emerald-900 mt-4">
              <div className="flex items-center gap-2 px-3 py-1 bg-emerald-900/30 border-b border-emerald-900">
                <TerminalIcon size={14} />
                <span className="text-xs">seeker@game-b:~</span>
              </div>

              <div className="p-3 h-[70vh] overflow-y-auto flex flex-col">
                <div className="flex-1 overflow-y-auto">
                  {nestedHistory.map((entry, i) => (
                    <div key={i} className="mb-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-emerald-600">seeker@game-b</span>
                        <span className="text-emerald-400">:~$</span>
                        <span className="break-all">{entry.command}</span>
                      </div>
                      <div className="mt-1 whitespace-pre-wrap break-words">{entry.output}</div>
                    </div>
                  ))}
                </div>
                <NestedCommandHandler setHistory={setNestedHistory} inputRef={nestedInputRef} closeModal={closeModal} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal;