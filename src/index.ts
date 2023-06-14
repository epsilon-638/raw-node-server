import { IncomingMessage, OutgoingMessage } from 'http';
import * as product from './models/product.model';
import Server from './Server';
import Request from './Request';
import Response from './Response';

const PORT = 3000;
const server = new Server([
  {
    path: '/api/product',
    method: 'GET',
    controller: async (req: Request, res: Response): Promise<void> => {
      res.status(200);
      res.json({ data: await product.find(1) });
    },
  },
  {
    path: '/api/product',
    method: 'POST',
    controller: async (_: Request, res: Response): Promise<void> => {
    }
  }
]);

server.serve(PORT);