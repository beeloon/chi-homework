export default class Router {
  constructor() {
    this.routes = [];
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

  handleRequest(req, res) {
    const { url } = req;
    console.log(url);
  }
}
