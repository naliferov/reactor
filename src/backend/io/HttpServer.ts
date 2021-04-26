import {Express, NextFunction, Request, Response} from "express";
import MainLayout from "../../lib/ts/ui/templates/MainLayout";
import {Server} from "http";
import * as React from "react";
import {renderToString} from 'react-dom/server';
import AppFrontend from "../../lib/ts/ui/AppFrontend";

export default class HttpServer {

    server: Server;

    constructor(createServer: any, express: Express) {

        let app = express();
        app.use(express.static('./src/public'));

        app.use(async (req: Request, res: Response, next: NextFunction) => {

                const props = {route: req.path};

                const app = React.createElement(AppFrontend, props);
                const appHtml = renderToString(app);
                const html = (new MainLayout()).build(appHtml, JSON.stringify(props));
                res.send(html);

            next();
        });

        this.server = createServer({}, app);
    }

    getServer(): Server {
        return this.server;
    }
}

