// commands/Quest.tsx
import React from 'react'

const Quest: React.FC = () => (
  <div className="text-emerald-400 space-y-2 whitespace-pre-wrap break-words">
    <pre className="text-cyan-400">
      {`
 ⚡ ACTIVE QUEST
 ============
      `}
    </pre>
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
)

export default Quest