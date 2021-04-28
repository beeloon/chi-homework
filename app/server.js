import { createServer } from "http";

import DBFileManager from "./lib/DBFileManager.js";

import { config } from "./lib/config.js";
import { user } from "./modules/user/user.model.js";

import { router } from "./routing.js";

const hostname = "127.0.0.1";
const port = 5000;

DBFileManager.init(config.pathToDBFolder, user);

const server = createServer((req, res) => {
  router.handleRequest(req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
