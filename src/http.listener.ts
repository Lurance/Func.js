import {of, Subject} from "rxjs";
import {defaultIfEmpty, switchMap, tap} from "rxjs/operators";
import {HttpRequest, HttpResponse, IHttp} from "./http.interface";
import {handleResponse} from "./response";
import {combineViews, View} from "./views";

export const httpListener = (...views: View[]) => {
    const request$ = new Subject<IHttp>();

    request$.pipe(
        switchMap(
            ({ req, res }) => combineViews(...views)(of(req), res)
                .pipe(
                    defaultIfEmpty({status: 404, body: {status: "error", data: {text: "not found"}}}),
                    tap((output) => handleResponse(res)(output)),
                ),
        ),
    )

        .subscribe();

    return (req: HttpRequest, res: HttpResponse) => request$.next({ req, res });
};
