import { useState } from "react";
import {
  ShieldAlert,
  ShieldCheck,
  Loader2,
  Search,
  Bot,
} from "lucide-react";

interface ScanResult {
  verdict: "safe" | "dangerous" | "suspicious";
  summary: string;
  reasons: string[];
  maliciousScore: number;
  suspiciousScore: number;
  harmlessScore: number;
  reputation: string;
}

const API_KEY =
  import.meta.env.VITE_GEMINI_API_KEY ||
  import.meta.env.VITE_OPENAI_API_KEY ||
  "";

async function scanUrlWithGemini(url: string): Promise<ScanResult> {
  if (!API_KEY) {
    throw new Error(
      "Gemini/OpenAI API key is missing. Set VITE_GEMINI_API_KEY or VITE_OPENAI_API_KEY."
    );
  }

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      temperature: 0,
      input: `You are a cybersecurity URL analysis expert. When given a URL, analyze it for potential threats, phishing, malware, suspicious patterns, or unsafe content. Respond ONLY with a raw JSON object matching this schema:\n{\n  "verdict": "safe" | "dangerous" | "suspicious",\n  "summary": "One sentence verdict explanation",\n  "reasons": ["reason1", "reason2", "reason3"],\n  "maliciousScore": 0-100,\n  "suspiciousScore": 0-100,\n  "harmlessScore": 0-100,\n  "reputation": "Good" | "Neutral" | "Poor" | "Unknown"\n}\nDo not include markdown, backticks, or any text outside the JSON object. Analyze this URL for safety: ${url}`,
    }),
  });

  if (!response.ok) {
    throw new Error("Gemini/OpenAI API request failed");
  }

  const data = await response.json();
  const rawText =
    Array.isArray(data.output)
      ? data.output
          .map((item: any) => {
            if (typeof item === "string") return item;
            if (Array.isArray(item.content)) {
              return item.content
                .map((chunk: any) =>
                  typeof chunk === "string"
                    ? chunk
                    : chunk?.text || ""
                )
                .join("");
            }
            return "";
          })
          .join("")
      : data.output_text || data.text || "";

  const clean = rawText.replace(/```json|```/g, "").trim();
  return JSON.parse(clean) as ScanResult;
}

export default function UrlScanner() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState("");

  const handleScan = async () => {
    if (!url.trim()) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const data = await scanUrlWithGemini(url);
      setResult(data);
    } catch (err) {
      console.error(err);
      setError("Failed to analyze URL. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleScan();
  };

  const isDangerous =
    result?.verdict === "dangerous" || result?.verdict === "suspicious";

  return (
    <div className="bg-[#111827] border border-cyan-500/20 rounded-3xl p-8 shadow-2xl">

      {/* INPUT */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-[#0f172a] border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400 transition"
        />
        <button
          onClick={handleScan}
          disabled={loading}
          className="bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-black font-semibold px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Scanning
            </>
          ) : (
            <>
              <Search className="w-5 h-5" />
              Scan URL
            </>
          )}
        </button>
      </div>

      {/* AI BADGE */}
      <div className="mt-4 flex items-center gap-2 text-slate-500 text-xs">
        <Bot className="w-3.5 h-3.5 text-cyan-500/60" />
        <span>
          Powered by{" "}
          <span className="text-cyan-400/80 font-medium">Gemini AI</span>
          {" "}(OpenAI) — AI-based threat intelligence
        </span>
      </div>

      {/* ERROR */}
      {error && (
        <div className="mt-6 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl p-4">
          {error}
        </div>
      )}

      {/* RESULT */}
      {result && (
        <div className="mt-8">
          <div
            className={`rounded-2xl p-6 border ${
              isDangerous
                ? "bg-red-500/10 border-red-500/30"
                : "bg-green-500/10 border-green-500/30"
            }`}
          >
            {/* HEADER */}
            <div className="flex items-center gap-3 mb-5">
              {isDangerous ? (
                <ShieldAlert className="w-8 h-8 text-red-400" />
              ) : (
                <ShieldCheck className="w-8 h-8 text-green-400" />
              )}
              <div>
                <h2 className="text-2xl font-bold">
                  {isDangerous ? "Suspicious URL Detected" : "URL Appears Safe"}
                </h2>
                <p className="text-slate-400 text-sm">{result.summary}</p>
              </div>
            </div>

            {/* STATS */}
            <div className="grid md:grid-cols-4 gap-4 mb-5">
              <div className="bg-[#0f172a] rounded-xl p-4">
                <p className="text-slate-400 text-sm">Malicious</p>
                <h3 className="text-3xl font-bold text-red-400">
                  {result.maliciousScore}
                </h3>
              </div>
              <div className="bg-[#0f172a] rounded-xl p-4">
                <p className="text-slate-400 text-sm">Suspicious</p>
                <h3 className="text-3xl font-bold text-yellow-400">
                  {result.suspiciousScore}
                </h3>
              </div>
              <div className="bg-[#0f172a] rounded-xl p-4">
                <p className="text-slate-400 text-sm">Harmless</p>
                <h3 className="text-3xl font-bold text-green-400">
                  {result.harmlessScore}
                </h3>
              </div>
              <div className="bg-[#0f172a] rounded-xl p-4">
                <p className="text-slate-400 text-sm">Reputation</p>
                <h3 className="text-3xl font-bold text-cyan-400">
                  {result.reputation}
                </h3>
              </div>
            </div>

            {/* REASONS */}
            {result.reasons?.length > 0 && (
              <div className="bg-[#0f172a] rounded-xl p-4">
                <p className="text-slate-400 text-xs uppercase tracking-widest mb-3 font-semibold">
                  Gemini Analysis
                </p>
                <ul className="space-y-2">
                  {result.reasons.map((reason, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-cyan-500 mt-0.5">›</span>
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}