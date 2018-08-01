import * as http from "http"

export type HttpRequest = http.IncomingMessage;

export type HttpResponse = http.ServerResponse;

export type Http = {
    req: HttpRequest,
    res: HttpResponse
}

