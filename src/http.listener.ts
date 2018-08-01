import {combineViews, View} from "./views"
import {of, Subject} from "rxjs"
import {Http, HttpRequest, HttpResponse} from "./http.interface"
import {switchMap, tap} from "rxjs/operators"
import {handleResponse} from "./response"

export const httpListener = (...views: View[]) => {
    const request$ = new Subject<Http>();

    request$.pipe(
        switchMap(
            http => combineViews(...views)(of(http.req))
                .pipe(
                    tap(output => handleResponse(http.res)(output))
                )
        )
    )

        .subscribe()

    return (req: HttpRequest, res: HttpResponse) => request$.next({ req, res })
}
