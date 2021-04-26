import AppFrontend from "../../../lib/ts/ui/AppFrontend";
import * as React from "react";
import * as ReactDOM from "react-dom";

declare global {
    interface Window { __STATE__: any; }
}

class AppFrontendInit {

    async run() {
        const state: { route: string } = window.__STATE__;
        const app = React.createElement(AppFrontend, state)
        ReactDOM.hydrate(app, document.getElementById('app'));
    }
}

const frontend = new AppFrontendInit();
frontend.run();