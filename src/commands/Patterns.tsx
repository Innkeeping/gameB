// commands/Patterns.tsx
import React from 'react'
import PatternsCommandHandler from '../commandhandlers/PatternsCommandHandler';

const Patterns: React.FC<{ setExpandedSection: (section: string | null) => void; expandedSection: string | null }> = ({ setExpandedSection, expandedSection }) => {
  return (
    <div className="text-emerald-400 space-y-2 whitespace-pre-wrap break-words">
      <pre className="text-pink-400">
        {`
 🌱 REGENERATIVE PATTERNS
 =====================
        `}
      </pre>
      <p>Key patterns for transition:</p>
      <ul className="ml-4 space-y-2">
        <li className="text-cyan-400">
          1. Mutual Benefit Circuits <span className="text-gray-500">(Type 'mutual' to expand)</span>
          {expandedSection === 'mutual-benefit' && (
            <div className="ml-4 mt-1 text-emerald-400">
              <p>
                These are networks where all participants benefit from the interactions and transactions. In Game-B, mutual benefit circuits can be seen in decentralized finance (DeFi) platforms where users earn rewards for liquidity provision, governance, and other activities.
              </p>
              <div className="bg-gray-800 p-3 mt-2 rounded border border-emerald-700">
                <p className="text-cyan-400">
                  <em>Example:</em> In Game-B, a DeFi platform might use a token that rewards users for staking and participating in the network, creating a virtuous cycle of growth and prosperity.
                </p>
              </div>
            </div>
          )}
        </li>
        <li className="text-cyan-400">
          2. Anti-Fragile Systems <span className="text-gray-500">(Type 'fragile' to expand)</span>
          {expandedSection === 'anti-fragile' && (
            <div className="ml-4 mt-1 text-emerald-400">
              <p>
                Anti-fragile systems not only withstand shocks but also improve from them. In the context of Game-B, this means designing systems that learn and adapt to change, becoming stronger over time.
              </p>
              <div className="bg-gray-800 p-3 mt-2 rounded border border-emerald-700">
                <p className="text-cyan-400">
                  <em>Example:</em> A decentralized autonomous organization (DAO) in Game-B could use machine learning algorithms to improve its decision-making processes based on feedback and data from its members and the environment.
                </p>
              </div>
            </div>
          )}
        </li>
        <li className="text-cyan-400">
          3. Distributed Governance <span className="text-gray-500">(Type 'distributed' to expand)</span>
          {expandedSection === 'distributed-governance' && (
            <div className="ml-4 mt-1 text-emerald-400">
              <p>
                Distributed governance involves decision-making processes that are decentralized and participatory. In Game-B, this can be achieved through blockchain-based voting mechanisms and community-driven initiatives.
              </p>
              <div className="bg-gray-800 p-3 mt-2 rounded border border-emerald-700">
                <p className="text-cyan-400">
                  <em>Example:</em> A community in Game-B could use a blockchain-based voting system to decide on the allocation of resources, ensuring that everyone has a say in the decision-making process.
                </p>
              </div>
            </div>
          )}
        </li>
        <li className="text-cyan-400">
          4. Sense-Making Networks <span className="text-gray-500">(Type 'sense' to expand)</span>
          {expandedSection === 'sense-making' && (
            <div className="ml-4 mt-1 text-emerald-400">
              <p>
                Sense-making networks are platforms where individuals and groups can share information, insights, and knowledge to create a coherent understanding of complex systems. In Game-B, these networks can facilitate collaboration and innovation.
              </p>
              <div className="bg-gray-800 p-3 mt-2 rounded border border-emerald-700">
                <p className="text-cyan-400">
                  <em>Example:</em> A knowledge-sharing platform in Game-B could connect experts and enthusiasts from various fields, enabling them to collaborate on solving global challenges related to the metacrisis.
                </p>
              </div>
            </div>
          )}
        </li>
        <li className="text-cyan-400">
          5. Generative Commons <span className="text-gray-500">(Type 'generative' to expand)</span>
          {expandedSection === 'generative-commons' && (
            <div className="ml-4 mt-1 text-emerald-400">
              <p>
                Generative commons are shared resources that are created and maintained by communities. In Game-B, this can include open-source software, collaborative research projects, and shared infrastructure.
              </p>
              <div className="bg-gray-800 p-3 mt-2 rounded border border-emerald-700">
                <p className="text-cyan-400">
                  <em>Example:</em> An open-source project in Game-B could be a decentralized application (dApp) that provides tools and resources for individuals and organizations to address the metacrisis, fostering collaboration and innovation.
                </p>
              </div>
            </div>
          )}
        </li>
      </ul>
      <p className="mt-4 text-yellow-400">
        In a world where systems are often far from equilibrium, small islands of coherence can shift the entire landscape. Welcome to Game B, a journey into a new social operating system that prioritizes human wellbeing, metastability, and ethical values. Here, we aim to cultivate wisdom, discernment, and the love that gods embody, to ensure a sustainable and fulfilling future for all. Your journey continues... Type 'help' to explore more commands.
      </p>
      <PatternsCommandHandler setExpandedSection={setExpandedSection} expandedSection={expandedSection} />
    </div>
  )
}

export default Patterns