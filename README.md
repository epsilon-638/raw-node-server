# Raw Node Server
---

## Express-Esque Server Implementation

### Example Routes

```typescript
import Server from './Server';
import Request from './Request';
import Response from './Response';

const PORT = 3000;

const server = new Server(
  [
    {
      method: 'GET',
      path: '/api/hello-world',
      controller: async (req: Request, res: Response): Promise<void> => {
        res.status(200);
        res.json({
          message: 'Hello, world!',
        });
      },
    },
  ],
);

server.serve(PORT);
```

### Goals
- [x] implement router from scratch
- [x] group routes by method
- [ ] implement body parser
- [ ] pass route params to Request object
