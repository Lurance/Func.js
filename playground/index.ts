import {httpListener} from "../src"
import {hello$, root$} from "./controller/example.controller"
import * as http from "http"

const createServer = () => {
    const HOSTNAME = '127.0.0.1';
    const PORT = 4000;

    const app = httpListener(root$, hello$);

    http.createServer(app)
        .listen(PORT, HOSTNAME, () => {
            console.log(`Server running @ http://${HOSTNAME}:${PORT}/`);
        });
}

createServer()