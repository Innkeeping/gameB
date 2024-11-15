// commands/HelpCommand.tsx
import React from 'react';

const HelpCommand: React.FC = () => (
  <div className="text-emerald-400 whitespace-pre-wrap break-words">
    <p className="mb-1">[Available Commands]</p>
    <ul className="ml-4 space-y-1">
      <li>help      - Display available commands</li>
      <li>begin     - Start your journey</li>
      <li>clear     - Clear terminal screen</li>
      <li>metacrisis - Learn about the metacrisis</li>
      <li>gamea    - Understand Game A (current system)</li>
      <li>gameb    - Explore Game B possibilities</li>
      <li>patterns  - Study regenerative patterns</li>
      <li>quest    - Your current mission</li>
      <li>study    - Deep dive into Game B concepts</li>
      <li>local    - Find local opportunities</li>
      <li>connect  - Build meaningful connections</li>
      <li>experiment - Start small experiments</li>
      <li>share    - Share your learnings</li>
      <li>terminal - Open nested terminal</li>
    </ul>
  </div>
);

export default HelpCommand;