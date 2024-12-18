// commands/ExperimentCommand.tsx
import React from 'react'

const Experiment: React.FC = () => (
  <div className="text-emerald-400 space-y-2 whitespace-pre-wrap break-words">
    <pre className="text-yellow-400">
      {`
 🔬 PRACTICAL EXPERIMENTS
 =====================
      `}
    </pre>
    <p>Starting small but meaningful experiments:</p>
    <ul className="ml-4 space-y-2">
      <li className="text-cyan-400">1. Micro-Projects
        <ul className="ml-4 mt-1 text-emerald-400">
          <li>• Community gardens</li>
          <li>• Skill-sharing networks</li>
          <li>• Local currencies</li>
        </ul>
      </li>
      <li className="text-cyan-400">2. Documentation
        <ul className="ml-4 mt-1 text-emerald-400">
          <li>• Process journals</li>
          <li>• Impact metrics</li>
          <li>• Learning outcomes</li>
        </ul>
      </li>
      <li className="text-cyan-400">3. Iteration
        <ul className="ml-4 mt-1 text-emerald-400">
          <li>• Feedback loops</li>
          <li>• Adaptation cycles</li>
          <li>• Scale considerations</li>
        </ul>
      </li>
    </ul>
    <p className="mt-4">Type 'share' to learn about spreading knowledge.</p>
  </div>
)

export default Experiment