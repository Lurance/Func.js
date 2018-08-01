import {HttpResponse} from "../http.interface"
import {ViewResponse} from "../views"

export type ResponseHandler = (res: HttpResponse) => (output: ViewResponse) => void;

export const handleResponse = (res: HttpResponse) => (output: ViewResponse) => {
    res.writeHead(output.status, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(output.body));
}
