export const agents = {
  claude: { name: 'Claude Code', short: 'Claude Code', glyph: 'C', color: '#d97757' },
  codex: { name: 'OpenAI Codex', short: 'Codex', glyph: 'X', color: '#10a37f' },
  cursor: { name: 'Cursor', short: 'Cursor', glyph: '▲', color: '#8b8b96' },
  antigravity: { name: 'Google Antigravity', short: 'Antigravity', glyph: 'A', color: '#4285f4' },
} as const;

export type AgentId = keyof typeof agents;

export const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#context-bridge', label: 'Context Bridge' },
  { href: '#privacy', label: 'Privacy' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

export const pricing = {
  plan: 'Herdbell Lifetime',
  dollars: 12,
  cents: 99,
  trialDays: 7,
  macs: 3,
  minMacOS: 'macOS 14 Sonoma',
};

export const contactEmail = 'hello@herdbell.app';

export const privacyPoints = [
  { title: 'No account login', body: 'No signing into AI providers and no API keys to paste.' },
  { title: 'No cloud backend', body: 'Agent monitoring happens entirely on your machine.' },
  { title: 'No extra AI costs', body: 'Herdbell never calls a model, so it never uses your tokens.' },
  { title: 'Lives in the menu bar', body: 'No dock icon and no permanent window to manage.' },
  { title: 'Minimal footprint', body: 'Native code with very little background CPU and memory use.' },
  { title: 'Launch at login', body: 'Optional. Turn it on once and forget about it.' },
];

export const faqs = [
  {
    q: 'Do I need to log in to my AI accounts or add API keys?',
    a: 'No. Herdbell connects to the agents already installed on your Mac through their supported local hooks. It never asks for credentials or API keys.',
  },
  {
    q: 'Which agents are supported?',
    a: 'Claude Code, OpenAI Codex, Cursor, and Google Antigravity at launch. More integrations are planned.',
  },
  {
    q: 'Will Herdbell mess with my agent configurations?',
    a: 'No. Herdbell keeps your existing settings and backs them up before adding its hooks. You can disconnect an agent at any time.',
  },
  {
    q: 'How does Context Bridge work without an AI model?',
    a: 'It pulls the goal, completed work, decisions, issues, and next steps out of your local session transcript and project files, then formats them as a continuation prompt. How complete the prompt is depends on what that data contains.',
  },
  {
    q: 'Does any of my data leave my Mac?',
    a: 'No. Session data stays local. Herdbell uses the network only to validate your license and check for updates.',
  },
  {
    q: 'Is it a subscription?',
    a: `No. You pay once and own it, with a ${pricing.trialDays}-day free trial first.`,
  },
];
