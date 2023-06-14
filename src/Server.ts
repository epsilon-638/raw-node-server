import http from 'http';
import Request from './Request';
import Response from './Response';
import { Controller, Route  } from './types';
import Router from './Router';

export default class Server {
  server: http.Server;

  constructor(routes: { path: string; controller: Controller }[]) { 
    const router = new Router(routes);
    const serverOptions = {
      IncomingMessage: Request,
      ServerResponse: Response,
    };

    this.server = http.createServer(
      serverOptions,
      async (req: Request, res: Response) => {
        const controller = router.getRoute(req.url ?? '');
        try {
          controller(req, res);
        } catch(err) {
          res.error(err);
        }
      },
    );
  }

  serve(port: number) {
    this.server.listen(port, () => {
      console.log(`
        Server listening at http://localhost:${port}
      `)
    });
  }
}