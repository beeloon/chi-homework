import { formatUrlPathname } from "../utils";

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

    const route = this.routes.find(
      (route) =>
        route.pathname === formatUrlPathname(url) && route.method === method
    );

    if (route) {
      await route.handler(req, res);
    } else {
      res.end("Not Found");
    }
  }
}

export const router = new Router();
