import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { loadEnv } from 'vite';

function createVirusTotalHandler(apiKey?: string) {
  return async (req: any, res: any, next: any) => {
    if (!req.url?.startsWith('/api/virustotal')) {
      next();
      return;
    }

    if (!apiKey) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: { message: 'VITE_VIRUSTOTAL_API_KEY is missing' } }));
      return;
    }

    const requestUrl = new URL(req.url, 'http://localhost');
    const upstreamPath = requestUrl.pathname.replace(/^\/api\/virustotal/, '') + requestUrl.search;
    const upstreamUrl = `https://www.virustotal.com/api/v3${upstreamPath}`;

    const chunks: Buffer[] = [];
    for await (const chunk of req) {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    }

    const method = (req.method || 'GET').toUpperCase();
    const body = chunks.length > 0 ? Buffer.concat(chunks) : undefined;

    const upstreamResponse = await fetch(upstreamUrl, {
      method,
      headers: {
        'x-apikey': apiKey,
        'accept': req.headers.accept || 'application/json',
        ...(req.headers['content-type'] ? { 'content-type': String(req.headers['content-type']) } : {}),
      },
      body: method === 'GET' || method === 'HEAD' ? undefined : body,
    });

    res.statusCode = upstreamResponse.status;
    const contentType = upstreamResponse.headers.get('content-type');
    if (contentType) {
      res.setHeader('Content-Type', contentType);
    }

    const responseText = await upstreamResponse.text();
    res.end(responseText);
  };
}

function createAbuseIpdbHandler(apiKey?: string) {
  return async (req: any, res: any, next: any) => {
    if (!req.url?.startsWith('/api/abuseipdb')) {
      next();
      return;
    }

    if (!apiKey) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ errors: [{ detail: 'VITE_ABUSEIPDB_API_KEY is missing' }] }));
      return;
    }

    const requestUrl = new URL(req.url, 'http://localhost');
    const upstreamPath = requestUrl.pathname.replace(/^\/api\/abuseipdb/, '') + requestUrl.search;
    const upstreamUrl = `https://api.abuseipdb.com/api/v2${upstreamPath}`;

    const response = await fetch(upstreamUrl, {
      method: req.method || 'GET',
      headers: {
        'Key': apiKey,
        'Accept': 'application/json',
      },
    });

    res.statusCode = response.status;
    const contentType = response.headers.get('content-type');
    if (contentType) {
      res.setHeader('Content-Type', contentType);
    }

    res.end(await response.text());
  };
}

function createNumverifyHandler(apiKey?: string) {
  return async (req: any, res: any, next: any) => {
    if (!req.url?.startsWith('/api/numverify')) {
      next();
      return;
    }

    if (!apiKey) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: { message: 'VITE_NUMVERIFY_API_KEY is missing. Add it to .env.local' } }));
      return;
    }

    const requestUrl = new URL(req.url, 'http://localhost');
    const queryNumber = requestUrl.searchParams.get('number') || '';
    
    // Numverify free plan only supports http, not https
    const upstreamUrl = `http://apilayer.net/api/validate?access_key=${apiKey}&number=${encodeURIComponent(queryNumber)}&country_code=&format=1`;

    try {
      const response = await fetch(upstreamUrl, {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
      });

      const responseText = await response.text();
      
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(responseText);
    } catch (err: any) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: { message: 'Failed to reach Numverify: ' + (err?.message || 'unknown error') } }));
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const virusTotalHandler = createVirusTotalHandler(env.VITE_VIRUSTOTAL_API_KEY);
  const abuseIpdbHandler = createAbuseIpdbHandler(env.VITE_ABUSEIPDB_API_KEY || env.VITE_ABUSEIPDB_KEY);
  const numverifyHandler = createNumverifyHandler(env.VITE_NUMVERIFY_API_KEY);

  return {
    plugins: [
      react(),
      {
        name: 'virus-total-middleware',
        configureServer(server) {
          server.middlewares.use(virusTotalHandler);
          server.middlewares.use(abuseIpdbHandler);
          server.middlewares.use(numverifyHandler);
        },
        configurePreviewServer(server) {
          server.middlewares.use(virusTotalHandler);
          server.middlewares.use(abuseIpdbHandler);
          server.middlewares.use(numverifyHandler);
        },
      },
    ],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
