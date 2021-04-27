import { routing } from "../routing.js";
import { formatUrlPathname } from "../utils/index.js";

export default class Router {
  constructor() {
    this.routes = routing;
  }

  get(url, handler) {
    this.routes.push({ url, handler, method: "GET" });
  }

  post(url, handler) {
    this.routes.push({ url, handler, method: "POST" });
  }

  patch(url, handler) {
    this.routes.push({ url, handler, method: "PATCH" });
  }

  delete(url, handler) {
    this.routes.push({ url, handler, method: "DELETE" });
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
