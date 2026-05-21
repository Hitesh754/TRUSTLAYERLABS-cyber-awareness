type GroqMessage = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};

const GROQ_API_BASE = 'https://api.groq.com/openai/v1';
const API_KEY = import.meta.env.VITE_GROQ_API_KEY || '';
const MODEL = import.meta.env.VITE_GROQ_MODEL || 'llama-3.3-70b-versatile';

async function groqChat(messages: GroqMessage[], temperature = 0.7) {
  if (!API_KEY) {
    throw new Error('Groq API key is missing');
  }

  const response = await fetch(`${GROQ_API_BASE}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL,
      messages,
      temperature,
      top_p: 0.92,
      max_tokens: 420,
    }),
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const data = await response.json();
  return data?.choices?.[0]?.message?.content?.trim() || '';
}

export { groqChat };
export type { GroqMessage };
