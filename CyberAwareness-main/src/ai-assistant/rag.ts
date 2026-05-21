import { detectScam } from './heuristics';
import { buildKnowledgeContext, searchKnowledgeBase } from './knowledgeBase';
import { groqChat, GroqMessage } from './groqClient';

type AssistantResult = {
  reply: string;
  sources: ReturnType<typeof searchKnowledgeBase>;
  signal: ReturnType<typeof detectScam>;
};

function buildSystemPrompt() {
  return [
    'You are CyberShield, a calm and trustworthy cyber safety assistant for Indian users.',
    'Write like a real human advisor, not a template or an AI bot.',
    'Keep the reply natural, specific, and grounded in the provided context.',
    'Avoid phrases like "as an AI", "I am unable", or long generic disclaimers unless absolutely necessary.',
    'When the message looks risky, say it plainly in everyday language and explain the pattern briefly.',
    'Give immediate safety steps first, then one or two extra checks if useful.',
    'If reporting is relevant, mention 1930 and cybercrime.gov.in.',
    'Do not invent legal sections or facts not present in the context; keep legal guidance simple.',
    'Use short paragraphs. Bullets are okay only when they improve clarity.',
  ].join(' ');
}

function buildUserPrompt(query: string) {
  const signal = detectScam(query);
  const context = buildKnowledgeContext(query);

  return [
    `User message: ${query}`,
    signal
      ? `Heuristic signal: ${signal.summary} (confidence ${Math.round(signal.confidence * 100)}%). Guidance cues: ${signal.guidance.join(' | ')}`
      : 'Heuristic signal: none detected, but still answer cautiously and check for awareness or reporting guidance.',
    `Relevant local knowledge: ${context}`,
    'Respond in a human, conversational style. If this is likely a scam, clearly explain why and what the user should do right now. If it is educational, answer the question directly and simply.',
  ].join('\n\n');
}

async function getAnswer(query: string): Promise<AssistantResult> {
  const sources = searchKnowledgeBase(query);
  const signal = detectScam(query);
  const messages: GroqMessage[] = [
    { role: 'system', content: buildSystemPrompt() },
    { role: 'user', content: buildUserPrompt(query) },
  ];

  let reply = '';
  try {
    reply = await groqChat(messages, 0.75);
  } catch {
    reply = '';
  }

  if (!reply) {
    const hint = signal
      ? `This looks like a ${signal.summary.toLowerCase()}. Stop interacting, check the sender, and if money or credentials are involved call 1930.`
      : 'Share the suspicious text or describe what happened, and I will help you check the safest next step.';
    reply = hint;
  }

  return { reply, sources, signal };
}

export { getAnswer };
export type { AssistantResult };
