import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/Users/alex/Documents/Edu/Online/React/crwn-clothing/dist/",
  base: "",
  plugins: [reactRefresh()],
});
