import {View} from "./views.interface"
import {merge} from "rxjs"

export type ViewsCombiner = (...views: View[]) => View;

export const combineViews: ViewsCombiner = (...views) => (request$) => merge(
    ...views.map(view => {
        const output$ = view(request$);

        if (!output$) {
            throw new Error()
        }

        return output$;
    })
)
