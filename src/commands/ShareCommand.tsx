// commands/ShareCommand.tsx
import React from 'react';

interface ShareCommandProps {
  expandedSection: string | null;
  setExpandedSection: (section: string | null) => void;
}

const ShareCommand: React.FC<ShareCommandProps> = ({ expandedSection, setExpandedSection }) => {
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="text-emerald-400 space-y-2 whitespace-pre-wrap break-words">
      <pre className="text-pink-400">
        {`
 📢 SHARING WISDOM
 ==============
        `}
      </pre>
      <p>Spreading knowledge and inspiration:</p>
      <ul className="ml-4 space-y-2">
        <li className="text-cyan-400 cursor-pointer" onClick={() => toggleSection('documentation')}>
          1. Documentation
          {expandedSection === 'documentation' && (
            <ul className="ml-4 mt-1 text-emerald-400">
              <li>• Case studies of resilient communities</li>
              <li>• Success stories from diverse backgrounds</li>
              <li>• Lessons learned from past failures</li>
            </ul>
          )}
        </li>
        <li className="text-cyan-400 cursor-pointer" onClick={() => toggleSection('channels')}>
          2. Channels
          {expandedSection === 'channels' && (
            <ul className="ml-4 mt-1 text-emerald-400">
              <li>• Community gatherings and forums</li>
              <li>• Online platforms for global collaboration</li>
              <li>• Networking with like-minded individuals and organizations</li>
            </ul>
          )}
        </li>
        <li className="text-cyan-400 cursor-pointer" onClick={() => toggleSection('methods')}>
          3. Methods
          {expandedSection === 'methods' && (
            <ul className="ml-4 mt-1 text-emerald-400">
              <li>• Storytelling to share experiences and lessons</li>
              <li>• Visual documentation to capture and share insights</li>
              <li>• Practical guides to facilitate learning and action</li>
            </ul>
          )}
        </li>
      </ul>
      <p className="mt-4 text-yellow-400">
        In a world where systems are often far from equilibrium, small islands of coherence can shift the entire landscape. Welcome to Game B, a journey into a new social operating system that prioritizes human wellbeing, metastability, and ethical values. Here, we aim to cultivate wisdom, discernment, and the love that gods embody, to ensure a sustainable and fulfilling future for all. Your journey continues... Type 'help' to explore more commands.
      </p>
    </div>
  );
};

export default ShareCommand;