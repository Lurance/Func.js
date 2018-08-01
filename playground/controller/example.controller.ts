import {filter, map} from "rxjs/operators";
import {View} from "../../src";

export const root$: View = (request$) => request$.pipe(
    filter((req) => req.url === "/"),
    map((req) => ({
        status: 200,
        body: {
            status: "success",
            data: {
                text: `Hello World from url: ${req.url}`,
            },
        },
    })),
);

export const hello$: View = (request$) => request$.pipe(
    filter((req) => req.url === "/hello"),
    map((req) => ({
        status: 200,
        body: {
            status: "success",
            data: {
                text: `Hello World from url: ${req.url}`,
            },
        },
    })),
);
