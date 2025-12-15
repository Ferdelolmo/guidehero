import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import faroUploader from "@grafana/faro-rollup-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      faroUploader({
        appName: "GuideHero",
        endpoint: "https://faro-api-prod-eu-west-2.grafana.net/faro/api/v1",
        appId: "4365",
        stackId: "1266807",
        verbose: true,
        apiKey: env.GRAFANA_FARO_API_KEY,
        gzipContents: true,
      }),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
