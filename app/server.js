import { createServer } from "http";

import { user } from "./modules/user/user.model.js";

import Router from "./lib/Router.js";

const hostname = "127.0.0.1";
const port = 5000;

const router = new Router();

const server = createServer(async (req, res) => {
  user.init();

  await router.handleRequest(req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
