// commands/Local.tsx
import React from 'react'

const Local: React.FC = () => (
  <div className="text-emerald-400 space-y-2 whitespace-pre-wrap break-words">
    <pre className="text-green-400">
      {`
 🌱 LOCAL OPPORTUNITIES
 ===================
      `}
    </pre>
    <p>Ways to identify and create local impact, fostering a resilient and values-driven community:</p>
    <ul className="ml-4 space-y-2">
      <li className="text-cyan-400">1. Asset Mapping
        <ul className="ml-4 mt-1 text-emerald-400">
          <li>• Natural resources and environmental assets</li>
          <li>• Community skills and local expertise</li>
          <li>• Existing initiatives and community-led projects</li>
        </ul>
      </li>
      <li className="text-cyan-400">2. Need Assessment
        <ul className="ml-4 mt-1 text-emerald-400">
          <li>• Community challenges and pain points</li>
          <li>• Resource gaps and areas of need</li>
          <li>• Opportunity spaces for innovation and improvement</li>
        </ul>
      </li>
      <li className="text-cyan-400">3. Connection Points
        <ul className="ml-4 mt-1 text-emerald-400">
          <li>• Community spaces for gatherings and collaboration</li>
          <li>• Local organizations and non-profits</li>
          <li>• Digital platforms for communication and coordination</li>
        </ul>
      </li>
      <li className="text-cyan-400">4. Action Planning
        <ul className="ml-4 mt-1 text-emerald-400">
          <li>• Developing strategies to address identified needs</li>
          <li>• Implementing projects that leverage local assets</li>
          <li>• Monitoring progress and adapting plans as needed</li>
        </ul>
      </li>
      <li className="text-cyan-400">5. Building Resilience
        <ul className="ml-4 mt-1 text-emerald-400">
          <li>• Strengthening community bonds and trust</li>
          <li>• Developing local leadership and capacity</li>
          <li>• Promoting sustainable practices and resource management</li>
        </ul>
      </li>
    </ul>
  </div>
)

export default Local