// categories.ts
export interface Link {
  title: string;
  urls: string[]; // Changed from string to string[]
}

export const categories: { [key: string]: Link[] } = {
  patterns: [
    {
      title: 'Mutual Benefit Circuits',
      urls: [
        'https://example.com/patterns/mutual-benefit-circuits',
        'https://example.com/patterns/mutual-benefit-circuits-2',
      ],
    },
    {
      title: 'Anti-Fragile Systems',
      urls: [
        'https://example.com/patterns/anti-fragile-systems',
        'https://example.com/patterns/anti-fragile-systems-2',
      ],
    },
    {
      title: 'Distributed Governance',
      urls: [
        'https://example.com/patterns/distributed-governance',
        'https://example.com/patterns/distributed-governance-2',
      ],
    },
  ],
  collective: [
    {
      title: 'Distributed Decision-Making',
      urls: [
        'https://example.com/collective/distributed-decision-making',
        'https://example.com/collective/distributed-decision-making-2',
      ],
    },
    {
      title: 'Wisdom Councils',
      urls: [
        'https://example.com/collective/wisdom-councils',
        'https://example.com/collective/wisdom-councils-2',
      ],
    },
    {
      title: 'Digital Commons',
      urls: [
        'https://example.com/collective/digital-commons',
        'https://example.com/collective/digital-commons-2',
      ],
    },
  ],
  regenerative: [
    {
      title: 'Biomimicry Principles',
      urls: [
        'https://example.com/regenerative/biomimicry-principles',
        'https://example.com/regenerative/biomimicry-principles-2',
      ],
    },
    {
      title: 'Circular Economics',
      urls: [
        'https://example.com/regenerative/circular-economics',
        'https://example.com/regenerative/circular-economics-2',
      ],
    },
    {
      title: 'Regenerative Agriculture',
      urls: [
        'https://example.com/regenerative/regenerative-agriculture',
        'https://example.com/regenerative/regenerative-agriculture-2',
      ],
    },
  ],
  antiRivalrous: [
    {
      title: 'Anti-Rivalrous Dynamics',
      urls: [
        'https://example.com/anti-rivalrous/dynamics',
        'https://example.com/anti-rivalrous/dynamics-2',
      ],
    },
    {
      title: 'Shared Resources',
      urls: [
        'https://example.com/anti-rivalrous/shared-resources',
        'https://example.com/anti-rivalrous/shared-resources-2',
      ],
    },
    {
      title: 'Open Source Projects',
      urls: [
        'https://example.com/anti-rivalrous/open-source-projects',
        'https://example.com/anti-rivalrous/open-source-projects-2',
      ],
    },
  ],
  longTerm: [
    {
      title: 'Long-Term Thinking',
      urls: [
        'https://example.com/long-term/thinking',
        'https://example.com/long-term/thinking-2',
      ],
    },
    {
      title: 'Sustainable Practices',
      urls: [
        'https://example.com/long-term/sustainable-practices',
        'https://example.com/long-term/sustainable-practices-2',
      ],
    },
    {
      title: 'Eco-Systems Design',
      urls: [
        'https://example.com/long-term/eco-systems-design',
        'https://example.com/long-term/eco-systems-design-2',
      ],
    },
  ],
  coherence: [
    {
      title: 'Coherent Pluralism',
      urls: [
        'https://example.com/coherence/pluralism',
        'https://example.com/coherence/pluralism-2',
      ],
    },
    {
      title: 'Unified Systems',
      urls: [
        'https://example.com/coherence/unified-systems',
        'https://example.com/coherence/unified-systems-2',
      ],
    },
    {
      title: 'Inclusive Governance',
      urls: [
        'https://example.com/coherence/inclusive-governance',
        'https://example.com/coherence/inclusive-governance-2',
      ],
    },
  ],
  emergent: [
    {
      title: 'Emergence Properties',
      urls: [
        'https://example.com/emergent/properties',
        'https://example.com/emergent/properties-2',
      ],
    },
    {
      title: 'Complex Adaptive Systems',
      urls: [
        'https://example.com/emergent/complex-adaptive-systems',
        'https://example.com/emergent/complex-adaptive-systems-2',
      ],
    },
    {
      title: 'Feedback Loops',
      urls: [
        'https://example.com/emergent/feedback-loops',
        'https://example.com/emergent/feedback-loops-2',
      ],
    },
  ],
};