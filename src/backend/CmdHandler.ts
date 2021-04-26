import HttpServer from "./io/HttpServer";
import * as express from 'express';
import {createServer} from "http";

export default class CmdHandler {

    constructor(cliArgs: any) {

        const cmd = cliArgs.cmd || cliArgs[0];
        if (!cmd) {
            console.log(`cmd: [${cmd}]`);
            return
        }

        console.log(`try execute cmd: [${cmd}]`);

        if (cmd === 'startServers') {
            this.startServers(cliArgs.port)
        }
    }

    startServers(port: string) {
        const httpServer = new HttpServer(createServer, express);
        httpServer.getServer().listen(port);
    }
}