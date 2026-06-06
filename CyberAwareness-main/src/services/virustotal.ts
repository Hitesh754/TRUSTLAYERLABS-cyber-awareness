const BASE_URL =
  "/api/virustotal";

const sleep = (ms: number) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

const toUrlId = (url: string) =>
  btoa(url)
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

async function vtRequest<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const response =
    await fetch(`${BASE_URL}${path}`, {
      ...options,
      headers: options.headers,
    });

  const payload =
    await response.json();

  if (!response.ok) {
    throw new Error(
      payload?.error?.message ||
        payload?.message ||
        "VirusTotal API Error"
    );
  }

  return payload as T;
}

export interface VirusTotalResult {
  malicious: number;
  suspicious: number;
  harmless: number;
  undetected: number;
  reputation: number;
}

export async function scanUrl(
  url: string
): Promise<VirusTotalResult> {
  const trimmedUrl = url.trim();

  if (!trimmedUrl) {
    throw new Error("URL is required");
  }

  const submitResponse = await vtRequest<{
    data?: { id?: string };
  }>("/urls", {
    method: "POST",
    headers: {
      "Content-Type":
        "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      url: trimmedUrl,
    }).toString(),
  });

  const analysisId = submitResponse?.data?.id;

  if (!analysisId) {
    throw new Error(
      "VirusTotal did not return an analysis id"
    );
  }

  for (let attempt = 0; attempt < 5; attempt += 1) {
    const analysis = await vtRequest<{
      data?: {
        attributes?: { status?: string };
      };
    }>(`/analyses/${analysisId}`);

    if (
      analysis?.data?.attributes?.status ===
      "completed"
    ) {
      break;
    }

    if (attempt < 4) {
      await sleep(1000);
    }
  }

  const report = await vtRequest<{
    data?: {
      attributes?: {
        last_analysis_stats?: {
          malicious?: number;
          suspicious?: number;
          harmless?: number;
          undetected?: number;
        };
        reputation?: number;
      };
    };
  }>(`/urls/${encodeURIComponent(toUrlId(trimmedUrl))}`);

  const stats =
    report?.data?.attributes
      ?.last_analysis_stats;

  return {
    malicious: stats?.malicious || 0,
    suspicious: stats?.suspicious || 0,
    harmless: stats?.harmless || 0,
    undetected: stats?.undetected || 0,
    reputation:
      report?.data?.attributes?.reputation || 0,
  };
}