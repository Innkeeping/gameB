// commandhandlers/PatternsCommandHandler.tsx
import React, { useEffect, useRef, useCallback } from 'react';

interface PatternsCommandHandlerProps {
  setExpandedSection: (section: string | null) => void;
  expandedSection: string | null;
}

const PatternsCommandHandler: React.FC<PatternsCommandHandlerProps> = ({ setExpandedSection, expandedSection }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [expandedSection]); // Refocus whenever expandedSection changes

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = inputRef.current?.value?.trim().toLowerCase();
      if (command) {
        handleCommand(command);
        inputRef.current!.value = ''; // Clear input after handling
      }
    }
  }, [setExpandedSection, expandedSection]);

  const handleCommand = (cmd: string) => {
    console.log('Command entered:', cmd); // Debugging line
    const sectionMap: { [key: string]: string | null } = {
      'mutual': 'mutual-benefit',
      'fragile': 'anti-fragile',
      'distributed': 'distributed-governance',
      'sense': 'sense-making',
      'generative': 'generative-commons',
    };

    const section = sectionMap[cmd];
    if (section) {
      console.log('Setting expanded section:', section); // Debugging line
      setExpandedSection(section === expandedSection ? null : section);
    } else {
      console.log('Command not recognized:', cmd); // Debugging line
    }
  };

  return (
    <div>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        className="absolute top-0 left-0 w-0 h-0 opacity-0 z-[-1]" // Hidden input to capture key events
        tabIndex={-1} // Make it focusable programmatically
        ref={inputRef}
        autoFocus // Ensure it is focused when rendered
      />
    </div>
  );
};

export default PatternsCommandHandler;