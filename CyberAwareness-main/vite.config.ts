import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const openAIKey = env.VITE_GEMINI_API_KEY || env.VITE_OPENAI_API_KEY || '';
  const anthropicKey = env.VITE_ANTHROPIC_API_KEY || '';

  return defineConfig({
    plugins: [react()],
    build: {
      chunkSizeWarningLimit: 1200,
    },
    server: {
      proxy: {
        '/api/openai': {
          target: 'https://api.openai.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/openai/, ''),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              if (openAIKey) {
                proxyReq.setHeader('Authorization', `Bearer ${openAIKey}`);
              }
            });
          },
        },
        '/api/anthropic': {
          target: 'https://api.anthropic.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/anthropic/, ''),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              if (anthropicKey) {
                proxyReq.setHeader('x-api-key', anthropicKey);
              }
              proxyReq.setHeader('anthropic-version', '2023-06-01');
            });
          },
        },
      },
    },
  });
};
