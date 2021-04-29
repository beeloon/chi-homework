import { createServer } from "http";

import DBFileManager from "./lib/DBFileManager";

import { config } from "./config";
import { user } from "./modules/user/user.model";

import { router } from "./routing";

const main = async () => {
  await DBFileManager.init(config.pathToDBFolder, user);

  const server = createServer((req, res) => {
    router.handleRequest(req, res);
  });

  server.listen(config.serverPort, () => {
    console.log(`Server running at http://localhost:${config.serverPort}`);
  });
};

main();
