"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbSession = exports.PackageClient = void 0;
const node_json_db_1 = require("node-json-db");
class PackageClient extends node_json_db_1.JsonDB {
    constructor() {
        const config = new node_json_db_1.Config("./db/packages", true, true, ".");
        super(config);
        this.push(".packages", {});
    }
    async uploadNew(obj) {
        await this.push(`.packages.${obj.name}`, {
            name: obj.name,
            description: obj.description,
            author: obj.author
        });
        await this.save();
    }
}
exports.PackageClient = PackageClient;
exports.dbSession = new PackageClient();
//# sourceMappingURL=dbUtil.js.map