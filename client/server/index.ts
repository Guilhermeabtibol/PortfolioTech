import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Caminho correto para os arquivos estáticos
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public") // Render usa a versão buildada
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Garante que qualquer rota SPA volte para o index.html
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  // Porta correta — Render injeta process.env.PORT
  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`✅ Server rodando em http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
