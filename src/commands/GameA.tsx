// commands/GameA.tsx
import React from 'react';

const GameA: React.FC = () => (
  <div className="text-emerald-400 space-y-2 whitespace-pre-wrap break-words">
    <pre className="text-yellow-400">
      {`
 GAME A ANALYSIS
 ==============
      `}
    </pre>
    <p>Current operating system of civilization:</p>
    <ul className="ml-4 space-y-1">
      <li>• Extractive economics</li>
      <li>• Zero-sum competition</li>
      <li>• Short-term optimization</li>
      <li>• Externalizing costs</li>
      <li>• Rivalry-based social structures</li>
    </ul>
    <p className="mt-2 text-cyan-400">Type 'gameb' to explore the alternative.</p>
  </div>
)

export default GameA