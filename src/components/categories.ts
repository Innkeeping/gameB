// categories.ts
export interface Link {
  title: string;
  url: string;
}

export const categories: { [key: string]: Link[] } = {
  patterns: [
    {
      title: 'Mutual Benefit Circuits',
      url: 'https://example.com/patterns/mutual-benefit-circuits',
    },
    {
      title: 'Anti-Fragile Systems',
      url: 'https://example.com/patterns/anti-fragile-systems',
    },
    {
      title: 'Distributed Governance',
      url: 'https://example.com/patterns/distributed-governance',
    },
  ],
  collective: [
    {
      title: 'Distributed Decision-Making',
      url: 'https://example.com/collective/distributed-decision-making',
    },
    {
      title: 'Wisdom Councils',
      url: 'https://example.com/collective/wisdom-councils',
    },
    {
      title: 'Digital Commons',
      url: 'https://example.com/collective/digital-commons',
    },
  ],
  regenerative: [
    {
      title: 'Biomimicry Principles',
      url: 'https://example.com/regenerative/biomimicry-principles',
    },
    {
      title: 'Circular Economics',
      url: 'https://example.com/regenerative/circular-economics',
    },
    {
      title: 'Regenerative Agriculture',
      url: 'https://example.com/regenerative/regenerative-agriculture',
    },
  ],
  antiRivalrous: [
    {
      title: 'Anti-Rivalrous Dynamics',
      url: 'https://example.com/anti-rivalrous/dynamics',
    },
    {
      title: 'Shared Resources',
      url: 'https://example.com/anti-rivalrous/shared-resources',
    },
    {
      title: 'Open Source Projects',
      url: 'https://example.com/anti-rivalrous/open-source-projects',
    },
  ],
  longTerm: [
    {
      title: 'Long-Term Thinking',
      url: 'https://example.com/long-term/thinking',
    },
    {
      title: 'Sustainable Practices',
      url: 'https://example.com/long-term/sustainable-practices',
    },
    {
      title: 'Eco-Systems Design',
      url: 'https://example.com/long-term/eco-systems-design',
    },
  ],
  coherence: [
    {
      title: 'Coherent Pluralism',
      url: 'https://example.com/coherence/pluralism',
    },
    {
      title: 'Unified Systems',
      url: 'https://example.com/coherence/unified-systems',
    },
    {
      title: 'Inclusive Governance',
      url: 'https://example.com/coherence/inclusive-governance',
    },
  ],
  emergent: [
    {
      title: 'Emergence Properties',
      url: 'https://example.com/emergent/properties',
    },
    {
      title: 'Complex Adaptive Systems',
      url: 'https://example.com/emergent/complex-adaptive-systems',
    },
    {
      title: 'Feedback Loops',
      url: 'https://example.com/emergent/feedback-loops',
    },
  ],
};