import { JsonDB, Config } from "node-json-db";

export type stringMap = {[key : string]: string}

export interface User {
    username : string,
    createdAt : number,
    password : string,
    accessToken : string,
    packages : Package[]
}

export interface Package {
    name : string,
    description : string,
    author: string,
    source: {[key : string]: string | string[] | stringMap}
}

export class PackageClient extends JsonDB {
    constructor() {
        const config = new Config("./db/packages", true, true, ".")
        super(config)
        this.push(".packages", {})
    }

    async uploadNew(obj : Package) {
        await this.push(`.packages.${obj.name}`, {
            name: obj.name,
            description: obj.description,
            author: obj.author
        } as Package)
        await this.save()
    }
}

export const dbSession = new PackageClient()