import {Observable} from "rxjs";
import {HttpRequest, HttpResponse} from "../http.interface";

export interface IViewResponse {
    body?: object;
    status: number;
}

export type View<T = IViewResponse> =
    (request$: Observable<HttpRequest>, response?: HttpResponse) => Observable<T>;

export type ViewsCombiner = (...views: View[]) => View;
