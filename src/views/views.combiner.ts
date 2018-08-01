import {merge} from "rxjs";
import {ViewsCombiner} from "./views.interface";

export const combineViews: ViewsCombiner = (...views) => (request$, response) => merge(
    ...views.map((view) => view(request$, response)),
);
