import { JsonDB } from "node-json-db";
export declare class PackageClient extends JsonDB {
    constructor();
    uploadNew(): Promise<void>;
}
