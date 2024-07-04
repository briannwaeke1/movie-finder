import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      __MOVIE_API_KEY__: JSON.stringify(env.VITE_THE_MOVIE_API_KEY),
    },
    plugins: [react()],
  };
});
