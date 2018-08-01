import * as http from "http";

export type HttpRequest = http.IncomingMessage;

export type HttpResponse = http.ServerResponse;

export interface IHttp {
    req: HttpRequest;
    res: HttpResponse;
}
