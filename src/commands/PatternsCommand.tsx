// commands/PatternsCommand.tsx
import React from 'react';

const PatternsCommand: React.FC = () => (
  <div className="text-emerald-400 space-y-2 whitespace-pre-wrap break-words">
    <pre>
      {`
 🌱 REGENERATIVE PATTERNS
 =====================
      `}
    </pre>
    <p>Key patterns for transition:</p>
    <ul className="ml-4 space-y-1">
      <li>1. Mutual benefit circuits</li>
      <li>2. Anti-fragile systems</li>
      <li>3. Distributed governance</li>
      <li>4. Sense-making networks</li>
      <li>5. Generative commons</li>
    </ul>
    <p className="mt-2">Type 'quest' to receive your mission.</p>
  </div>
);

export default PatternsCommand;