import { createServer } from "http";
import Router from "./lib/Router.js";

const hostname = "127.0.0.1";
const port = 5000;

const router = new Router();

const server = createServer((req, res) => {
  router.handleRequest(req, res);
  res.end("API Server...");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
