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
          <li>• <strong>Complex Adaptive Systems</strong>: Systems that adapt and evolve over time.
            <p className="mt-1 text-gray-400">
              Complex adaptive systems (CAS) are systems composed of many interacting components that can adapt and evolve over time. CAS are characterized by their ability to self-organize and respond to changes in their environment.
            </p>
          </li>
          <li>• <strong>Feedback Loops</strong>: How systems respond to their own outputs.
            <p className="mt-1 text-gray-400">
              Feedback loops are mechanisms by which the output of a system is fed back into the system, either directly or indirectly, to influence its future behavior. Feedback loops can be positive (amplifying changes) or negative (damping changes).
            </p>
          </li>
          <li>• <strong>Emergence Properties</strong>: How complex patterns arise from simple rules.
            <p className="mt-1 text-gray-400">
              Emergence is the process by which complex patterns and behaviors arise from the interaction of simpler components. Emergent properties are characteristics of a system that are not present in the individual components but arise from their interactions.
            </p>
          </li>
        </ul>
      </li>
      <li className="text-cyan-400">2. Regenerative Design
        <ul className="ml-4 mt-1 text-emerald-400">
          <li>• <strong>Biomimicry Principles</strong>: Designing systems inspired by nature.
            <p className="mt-1 text-gray-400">
              Biomimicry is the practice of designing solutions by emulating the strategies found in nature. By studying and mimicking natural systems, designers can create more sustainable and efficient solutions.
            </p>
          </li>
          <li>• <strong>Circular Economics</strong>: Designing systems that are restorative and regenerative.
            <p className="mt-1 text-gray-400">
              Circular economics is an economic system aimed at eliminating waste and the continual use of resources. It is based on the principles of designing out waste and pollution, keeping products and materials in use, and regenerating natural systems.
            </p>
          </li>
          <li>• <strong>Regenerative Agriculture</strong>: Practices that regenerate soil and ecosystems.
            <p className="mt-1 text-gray-400">
              Regenerative agriculture is a holistic land management practice that aims to regenerate soil, increase biodiversity, improve water cycles, enhance ecosystem services, and support the health of the community and the planet.
            </p>
          </li>
        </ul>
      </li>
      <li className="text-cyan-400">3. Collective Intelligence
        <ul className="ml-4 mt-1 text-emerald-400">
          <li>• <strong>Distributed Decision-Making</strong>: Making decisions through decentralized processes.
            <p className="mt-1 text-gray-400">
              Distributed decision-making involves making decisions through a decentralized process, where multiple individuals or groups contribute to and participate in the decision-making process.
            </p>
          </li>
          <li>• <strong>Wisdom Councils</strong>: Groups that make decisions based on collective wisdom.
            <p className="mt-1 text-gray-400">
              Wisdom councils are groups of individuals who are selected to make decisions based on collective wisdom. These councils often use a structured process to gather and synthesize diverse perspectives and insights.
            </p>
          </li>
          <li>• <strong>Digital Commons</strong>: Shared resources managed by a community.
            <p className="mt-1 text-gray-400">
              Digital commons are shared resources managed by a community. These resources can include open-source software, shared data, and collaborative platforms.
            </p>
          </li>
        </ul>
      </li>
    </ul>
    <p className="mt-4">Type 'local' to explore how to apply these concepts locally.</p>
  </div>
);

export default StudyCommand;