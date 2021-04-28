import { formatUrlPathname } from "../utils/index.js";

class Router {
  constructor() {
    this.routes = [];
  }

  get(pathname, handler) {
    this.routes.push({ pathname, handler, method: "GET" });
  }

  post(pathname, handler) {
    this.routes.push({ pathname, handler, method: "POST" });
  }

  patch(pathname, handler) {
    this.routes.push({ pathname, handler, method: "PATCH" });
  }

  delete(pathname, handler) {
    this.routes.push({ pathname, handler, method: "DELETE" });
  }

  async handleRequest(req, res) {
    const { url, method } = req;

    const { handler } = this.routes.find(
      (route) =>
        route.pathname === formatUrlPathname(url) && route.method === method
    );

    await handler(req, res);
  }
}

export const router = new Router();
