import { JsonDB } from "node-json-db";
export type stringMap = {
    [key: string]: string;
};
export interface User {
    username: string;
    createdAt: number;
    password: string;
    accessToken: string;
    packages: Package[];
}
export interface Package {
    name: string;
    description: string;
    author: string;
    source: {
        [key: string]: string | string[] | stringMap;
    };
}
export declare class PackageClient extends JsonDB {
    constructor();
    uploadNew(obj: Package): Promise<void>;
}
export declare const dbSession: PackageClient;
