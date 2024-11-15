import React from 'react';
import { CommandFunction } from './types';

export const commands: Record<string, CommandFunction> = {
  help: () => (
    <div className="text-emerald-400 whitespace-pre-wrap break-words">
      <p className="mb-1">[Available Commands]</p>
      <ul className="ml-4 space-y-1">
        <li>help      - Display available commands</li>
        <li>begin     - Start your journey</li>
        <li>clear     - Clear terminal screen</li>
        <li>metacrisis - Learn about the metacrisis</li>
        <li>gamea    - Understand Game A (current system)</li>
        <li>gameb    - Explore Game B possibilities</li>
        <li>patterns  - Study regenerative patterns</li>
        <li>quest    - Your current mission</li>
        <li>study    - Deep dive into Game B concepts</li>
        <li>local    - Find local opportunities</li>
        <li>connect  - Build meaningful connections</li>
        <li>experiment - Start small experiments</li>
        <li>share    - Share your learnings</li>
      </ul>
    </div>
  ),

  begin: () => (
    <div className="text-emerald-400 space-y-2 whitespace-pre-wrap break-words">
      <p>Welcome to the threshold of transformation.</p>
      <p>You stand at the intersection of two games:</p>
      <p className="text-yellow-400">Game A: The current dominant system</p>
      <p className="text-green-400">Game B: An emerging possibility</p>
      <p className="mt-4">Type 'metacrisis' to understand why change is necessary.</p>
    </div>
  ),

  metacrisis: () => (
    <div className="text-emerald-400 space-y-2 whitespace-pre-wrap break-words">
      <pre className="text-red-500">
{`
 ⚠ CRITICAL CONVERGENCE ⚠
 ========================
`}</pre>
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
  ),

  gamea: () => (
    <div className="text-emerald-400 space-y-2 whitespace-pre-wrap break-words">
      <pre className="text-yellow-400">
{`
 GAME A ANALYSIS
 ==============
`}</pre>
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
  ),

  gameb: () => (
    <div className="text-emerald-400 space-y-2 whitespace-pre-wrap break-words">
      <pre className="text-green-400">
{`
 GAME B VISION
 ============
`}</pre>
      <p>An emerging civilization model based on:</p>
      <ul className="ml-4 space-y-1 text-green-400">
        <li>• Regenerative practices</li>
        <li>• Anti-rivalrous dynamics</li>
        <li>• Long-term thinking</li>
        <li>• Collective intelligence</li>
        <li>• Coherent pluralism</li>
      </ul>
      <p className="mt-2">Type 'patterns' to study regenerative patterns.</p>
    </div>
  ),

  patterns: () => (
    <div className="text-emerald-400 space-y-2 whitespace-pre-wrap break-words">
      <pre>
{`
 🌱 REGENERATIVE PATTERNS
 =====================
`}</pre>
      <p>Key patterns for transition:</p>
      <ul className="ml-4 space-y-1">
        <li>1. Mutual benefit circuits</li>
        <li>2. Anti-fragile systems</li>
        <li>3. Distributed governance</li>
        <li>4. Sense-making networks</li>
        <li>5. Generative commons</li>
      </ul>
      <p className="mt-2">Type 'quest' to receive your mission.</p>
    </div>
  ),

  quest: () => (
    <div className="text-emerald-400 space-y-2 whitespace-pre-wrap break-words">
      <pre className="text-cyan-400">
{`
 ⚡ ACTIVE QUEST
 ============
`}</pre>
      <p>Your current mission:</p>
      <p className="text-cyan-400">Understand and integrate Game B patterns into your local context.</p>
      <ul className="ml-4 space-y-1 mt-2">
        <li>1. Study the patterns (type 'study')</li>
        <li>2. Find local opportunities (type 'local')</li>
        <li>3. Build connections (type 'connect')</li>
        <li>4. Start small experiments (type 'experiment')</li>
        <li>5. Share your learnings (type 'share')</li>
      </ul>
      <p className="mt-4 text-yellow-400">Remember: The transition happens through us, not to us.</p>
    </div>
  ),

  study: () => (
    <div className="text-emerald-400 space-y-2 whitespace-pre-wrap break-words">
      <pre className="text-blue-400">
{`
 📚 DEEP LEARNING PATH
 ==================
`}</pre>
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
  ),

  local: () => (
    <div className="text-emerald-400 space-y-2 whitespace-pre-wrap break-words">
      <pre className="text-green-400">
{`
 🌱 LOCAL OPPORTUNITIES
 ===================
`}</pre>
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
  ),

  connect: () => (
    <div className="text-emerald-400 space-y-2 whitespace-pre-wrap break-words">
      <pre className="text-purple-400">
{`
 🕸 BUILDING NETWORKS
 =================
`}</pre>
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
  ),

  experiment: () => (
    <div className="text-emerald-400 space-y-2 whitespace-pre-wrap break-words">
      <pre className="text-yellow-400">
{`
 🔬 PRACTICAL EXPERIMENTS
 =====================
`}</pre>
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
  ),

  share: () => (
    <div className="text-emerald-400 space-y-2 whitespace-pre-wrap break-words">
      <pre className="text-pink-400">
{`
 📢 SHARING WISDOM
 ==============
`}</pre>
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
  ),

  clear: () => {
    return null;
  },

  sudo: (setSudoAttempts) => {
    if (setSudoAttempts) {
      setSudoAttempts(prev => prev + 1);
      const messages = [
        "Access denied: Game A permissions not valid here",
        "Nice try. Game B requires different thinking.",
        "Hierarchy-based commands have no power here.",
        "Power emerges from connection, not control...",
        "Perhaps it's time to explore 'patterns' instead?"
      ];
      return <p className="text-red-500">{messages[Math.min(prev, messages.length - 1)]}</p>;
    }
    return null;
  }
};