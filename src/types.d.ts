import Request from "./Request";
import Response from "./Response";

export type Controller = (req: Request, res: Response) => Promise<unknown>;
export type Method = 'GET' | 'POST' | 'PUT' | 'UPDATE' | 'DELETE';
export type RouteDef = { path: string; method: string; controller: Controller };
export type Route = { pathRegex: RegExp; controller: Controller };