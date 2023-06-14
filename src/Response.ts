import { IncomingMessage, ServerResponse } from "http";

export default class Response<Request extends IncomingMessage = IncomingMessage> extends ServerResponse<Request> {
  json(data: unknown) {
    this.setHeader('Content-Type', 'application/json');
    this.end(JSON.stringify(data));
  }

  status(code: number) {
    this.statusCode = code;
    return this;
  }

  error(msg: unknown) {
    this.status(500);
    this.json({
      error: msg,
    });
  }

  notFound() {
    this.status(404);
    this.json({
      message: 'Not Found',
    });
  }
}