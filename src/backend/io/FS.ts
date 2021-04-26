import * as fs from 'src/backend/io/FS';
import * as util from 'util';

export default class FS {

    readFileNative = util.promisify(fs.readFile);
    writeFileNative = util.promisify(fs.writeFile);

    async readFile(path: string) {
        return await this.readFileNative(path, 'utf8');
    }

    async writeFile(path: string, data: string) {
        return await this.writeFileNative(path, data);
    }
}