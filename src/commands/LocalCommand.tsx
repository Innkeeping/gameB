// commands/LocalCommand.tsx
import React from 'react';

const LocalCommand: React.FC = () => (
  <div className="text-emerald-400 space-y-2 whitespace-pre-wrap break-words">
    <pre className="text-green-400">
      {`
 🌱 LOCAL OPPORTUNITIES
 ===================
      `}
    </pre>
    <p>Ways to identify and create local impact:</p>
    <ul className="ml-4 space-y-2">
      <li className="text-cyan-400">1. Asset Mapping
        <ul className="ml-4 mt-1 text-emerald-400">
          <li>• Natural resources</li>
          <li>• Community skills</li>
          <li>• Existing initiatives</li>
        </ul>
      </li>
      <li className="text-cyan-400">2. Need Assessment
        <ul className="ml-4 mt-1 text-emerald-400">
          <li>• Community challenges</li>
          <li>• Resource gaps</li>
          <li>• Opportunity spaces</li>
        </ul>
      </li>
      <li className="text-cyan-400">3. Connection Points
        <ul className="ml-4 mt-1 text-emerald-400">
          <li>• Community spaces</li>
          <li>• Local organizations</li>
          <li>• Digital platforms</li>
        </ul>
      </li>
    </ul>
    <p className="mt-4">Type 'connect' to learn about building networks.</p>
  </div>
);

export default LocalCommand;