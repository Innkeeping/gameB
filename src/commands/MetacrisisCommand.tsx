// commands/MetacrisisCommand.tsx
import React from 'react';

const MetacrisisCommand: React.FC = () => (
  <div className="text-emerald-400 space-y-2 whitespace-pre-wrap break-words">
    <pre className="text-red-500">
      {`
 ⚠ CRITICAL CONVERGENCE ⚠
 ========================
      `}
    </pre>
    <p>The metacrisis represents the interconnected nature of multiple global challenges:</p>
    <ul className="ml-4 space-y-1 text-yellow-400">
      <li>• Climate emergency</li>
      <li>• Social inequality</li>
      <li>• Economic instability</li>
      <li>• Information disorder</li>
      <li>• Meaning crisis</li>
    </ul>
    <p className="mt-2">These are not separate problems, but symptoms of Game A's fundamental design.</p>
    <p className="mt-2 text-cyan-400">Type 'gamea' to understand the current system.</p>
  </div>
);

export default MetacrisisCommand;