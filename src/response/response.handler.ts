import {HttpResponse} from "../http.interface";
import {IViewResponse} from "../views";

export type ResponseHandler = (res: HttpResponse) => (output: IViewResponse) => void;

export const handleResponse: ResponseHandler = (res: HttpResponse) => (output: IViewResponse) => {
    res.writeHead(output.status, { "Content-Type": "application/json" });
    res.end(JSON.stringify(output.body));
};
