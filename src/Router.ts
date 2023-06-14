import Request from "./Request";
import Response from "./Response";
import { pathToRegexp } from 'path-to-regexp';
import { Controller, Method, Route, RouteDef } from "./types";
import * as _ from 'lodash';


export default class Router {
  routes: Map<Method, Route[]>;

  constructor(routes: RouteDef[]) {
    this.routes = new Map(
      _.entries(_.groupBy(routes, (r) => r.method)).map(([method, routeDefs]) => {
        return [
          method as Method,
          routeDefs.map((r) => ({
            pathRegex: pathToRegexp(r.path),
            controller: r.controller,
          })),
        ];
      }),
    );
  }

  getRoute(method: Method, url: string): Controller {
    const methodGroup = this.routes.get(method)
    if (methodGroup) {
      const route = methodGroup.find((r) => {
        return r.pathRegex.exec(url) !== null;
      });

      if (route) {
        return route.controller;
      }
    }

    return async (_: Request, res: Response) =>
      res.notFound();
  }
}