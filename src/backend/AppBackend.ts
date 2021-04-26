import CmdHandler from "./CmdHandler";

export default class AppBackend {

    cliArgs = {};
    nodeTags: {};

    parseAndSetCliArgs(cliArgs: string[]) {

        for (let i = 0; i < cliArgs.length; i++) {
            if (i < 2) continue;

            let arg = cliArgs[i];
            let [k, v] = arg.split('=');
            if (!v) {
                this.cliArgs[i - 2] = arg; //start write args from main 0
                continue;
            }

            k = k.slice(2); //remove -- characters
            this.cliArgs[k.trim()] = v.trim();
        }

        return this;
    }

    async run() {
        this.parseAndSetCliArgs(process.argv);
        (new CmdHandler(this.cliArgs))
    }
}
