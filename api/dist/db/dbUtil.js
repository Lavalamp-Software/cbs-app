"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageClient = void 0;
const node_json_db_1 = require("node-json-db");
class PackageClient extends node_json_db_1.JsonDB {
    constructor() {
        const config = new node_json_db_1.Config("./packages", true, true, "/");
        super(config);
    }
    async uploadNew() {
        this.push("/test3", { "me": "cool" });
    }
}
exports.PackageClient = PackageClient;
//# sourceMappingURL=dbUtil.js.map