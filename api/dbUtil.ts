import { HttpStatus } from "@nestjs/common";
import { JsonDB, Config } from "node-json-db";
import * as semver from "semver";


export interface User {
    username : string,
    createdAt : number,
    password : string,
    accessToken : string,
    packages : Package[]
}

export type stringMap<extraTypes> = {[key : string]: string | extraTypes}

export interface Package {
    name : string,
    description : string,
    version: string,
    author: string,
    source: stringMap<string | string[]>
}

export class PackageClient extends JsonDB {
    constructor() {
        const config = new Config("./db/packages", true, true, ":")
        super(config)
    }

    // Do only in production
    async empty() {
        await this.push(":packages", {})
    }

    async uploadNew(obj : Package) : Promise<HttpStatus> {
        if (semver.valid(obj.version)) {
            await this.push(`:packages:${obj.name}:${obj.version}`, obj)
            await this.save()
            return HttpStatus.OK
        } else {
            return HttpStatus.BAD_REQUEST
        }
    }
}

export const dbSession = new PackageClient()