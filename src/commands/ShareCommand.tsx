// commands/ShareCommand.tsx
import React from 'react';

const ShareCommand: React.FC = () => (
  <div className="text-emerald-400 space-y-2 whitespace-pre-wrap break-words">
    <pre className="text-pink-400">
      {`
 📢 SHARING WISDOM
 ==============
      `}
    </pre>
    <p>Spreading knowledge and inspiration:</p>
    <ul className="ml-4 space-y-2">
      <li className="text-cyan-400">1. Documentation
        <ul className="ml-4 mt-1 text-emerald-400">
          <li>• Case studies</li>
          <li>• Success stories</li>
          <li>• Failure lessons</li>
        </ul>
      </li>
      <li className="text-cyan-400">2. Channels
        <ul className="ml-4 mt-1 text-emerald-400">
          <li>• Local gatherings</li>
          <li>• Digital platforms</li>
          <li>• Learning networks</li>
        </ul>
      </li>
      <li className="text-cyan-400">3. Methods
        <ul className="ml-4 mt-1 text-emerald-400">
          <li>• Storytelling</li>
          <li>• Visual documentation</li>
          <li>• Practical guides</li>
        </ul>
      </li>
    </ul>
    <p className="mt-4 text-yellow-400">Your journey continues... Type 'help' to explore more commands.</p>
  </div>
);

export default ShareCommand;