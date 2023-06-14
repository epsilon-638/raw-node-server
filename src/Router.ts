import Request from "./Request";
import Response from "./Response";
import { pathToRegexp } from 'path-to-regexp';
import { Controller, Route } from "./types";

export default class Router {
  routes: Route[];

  constructor(routes: { path: string; controller: Controller }[]) {
    this.routes = routes.map(({ path, controller }) => {
      return {
        controller,
        pathRegex: pathToRegexp(path),
      };
    });
  }

  getRoute(url: string): Controller {
    const route = this.routes.find((r) => {
      return r.pathRegex.exec(url) !== null;
    });

    return route
      ? route.controller
      : async (_: Request, res: Response) =>
          res.notFound();
  }
}