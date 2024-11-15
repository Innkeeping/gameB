// commands/StudyCommand.tsx
import React from 'react';

const StudyCommand: React.FC = () => (
  <div className="text-emerald-400 space-y-2 whitespace-pre-wrap break-words">
    <pre className="text-blue-400">
      {`
 📚 DEEP LEARNING PATH
 ==================
      `}
    </pre>
    <p>Essential areas of study:</p>
    <ul className="ml-4 space-y-2">
      <li className="text-cyan-400">1. Systems Thinking
        <ul className="ml-4 mt-1 text-emerald-400">
          <li>• Complex adaptive systems</li>
          <li>• Feedback loops</li>
          <li>• Emergence properties</li>
        </ul>
      </li>
      <li className="text-cyan-400">2. Regenerative Design
        <ul className="ml-4 mt-1 text-emerald-400">
          <li>• Biomimicry principles</li>
          <li>• Circular economics</li>
          <li>• Regenerative agriculture</li>
        </ul>
      </li>
      <li className="text-cyan-400">3. Collective Intelligence
        <ul className="ml-4 mt-1 text-emerald-400">
          <li>• Distributed decision-making</li>
          <li>• Wisdom councils</li>
          <li>• Digital commons</li>
        </ul>
      </li>
    </ul>
    <p className="mt-4">Type 'local' to explore how to apply these concepts locally.</p>
  </div>
);

export default StudyCommand;