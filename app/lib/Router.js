import { getUserController } from "../modules/user/user.controller.js";

const routes = [
  {
    url: "/users/:id",
    handler: getUserController,
  },
];

export default class Router {
  constructor() {
    this.routes = routes;
  }

  get(url, handler) {}

  post(url, handler) {}

  put(url, handler) {}

  delete(url, handler) {}

  handleRequest(req, res) {
    const { url } = req;
    console.log(url);
  }
}
