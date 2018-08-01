import {Observable} from "rxjs"
import {HttpRequest} from "../http.interface"

export type ViewResponse = {
    status: number,
    body?: object,
};

export type View = (request$: Observable<HttpRequest>) => Observable<ViewResponse>;