import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import { defineConfig } from "vite";

const cleanRootPlugin = () => {
  return {
    name: "clean-root",
    buildStart() {
      const rootDir = path.resolve(process.cwd(), "..");
      const filesToRemove = ["assets", "index.html", "favicon.png"];

      filesToRemove.forEach((file) => {
        const filePath = path.join(rootDir, file);
        if (fs.existsSync(filePath)) {
          fs.rmSync(filePath, { recursive: true, force: true });
          console.log(`Cleaned: ${file}`);
        }
      });
    },
  };
};

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss(), cleanRootPlugin()],
  build: {
    outDir: "../",
    emptyOutDir: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "lucide-react"],
          xlsx: ["xlsx"],
        },
      },
    },
  },
});
