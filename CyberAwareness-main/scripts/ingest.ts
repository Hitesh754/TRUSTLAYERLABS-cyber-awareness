/*
  Simple ingest script to read local guide text and POST documents to Groq index.

  Usage (after setting env vars):
    node ./scripts/ingest.js

  Environment variables expected:
    - GROQ_API_KEY
    - GROQ_PROJECT
    - GROQ_INDEX

  NOTE: This script is a minimal example. In production, run ingest from a secure environment.
*/

import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const API_BASE = 'https://api.groq.com/v1';
const API_KEY = process.env.GROQ_API_KEY || '';
const PROJECT = process.env.GROQ_PROJECT || '';
const INDEX = process.env.GROQ_INDEX || '';

async function run() {
  if (!API_KEY || !PROJECT || !INDEX) {
    console.error('Set GROQ_API_KEY, GROQ_PROJECT, GROQ_INDEX');
    process.exit(1);
  }

  const file = path.join(__dirname, '..', 'src', 'ai-assistant', 'data', 'guide-text.md');
  const text = fs.readFileSync(file, 'utf-8');

  const docs = [{ id: 'guide-1', text }];

  const url = `${API_BASE}/projects/${PROJECT}/indexes/${INDEX}/documents`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${API_KEY}` },
    body: JSON.stringify({ documents: docs }),
  });

  if (!res.ok) {
    console.error('Ingest failed', await res.text());
    process.exit(1);
  }

  console.log('Ingest completed');
}

run().catch((e) => { console.error(e); process.exit(1); });
