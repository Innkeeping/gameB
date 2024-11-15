// commands/ConnectCommand.tsx
import React from 'react';

const ConnectCommand: React.FC = () => (
  <div className="text-emerald-400 space-y-2 whitespace-pre-wrap break-words">
    <pre className="text-purple-400">
      {`
 🕸 BUILDING NETWORKS
 =================
      `}
    </pre>
    <p>Creating meaningful connections:</p>
    <ul className="ml-4 space-y-2">
      <li className="text-cyan-400">1. Find Allies
        <ul className="ml-4 mt-1 text-emerald-400">
          <li>• Local changemakers</li>
          <li>• Community leaders</li>
          <li>• Knowledge holders</li>
        </ul>
      </li>
      <li className="text-cyan-400">2. Create Spaces
        <ul className="ml-4 mt-1 text-emerald-400">
          <li>• Learning circles</li>
          <li>• Community events</li>
          <li>• Online forums</li>
        </ul>
      </li>
      <li className="text-cyan-400">3. Build Trust
        <ul className="ml-4 mt-1 text-emerald-400">
          <li>• Shared values</li>
          <li>• Consistent presence</li>
          <li>• Mutual support</li>
        </ul>
      </li>
    </ul>
    <p className="mt-4">Type 'experiment' to explore practical actions.</p>
  </div>
);

export default ConnectCommand;