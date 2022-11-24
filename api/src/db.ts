import { HttpStatus } from "@nestjs/common";
import { Collection, Db, Document, MongoClient } from "mongodb";
import * as semver from "semver";
import { PackageType } from "./types";


export class PackageClient extends MongoClient {

    public database : Db
    public collection : Collection<Document>

    constructor() {
        super(process.env.MONGO)
        this.connect()
        this.database = this.db("cbs")
        this.collection = this.database.collection("packages")
    }

    async insertPackage(pkg : PackageType) : Promise<HttpStatus> {
        try {
            await this.collection.findOneAndReplace(
                {
                    name : pkg.name,
                    version: pkg.version
                },
                pkg,
                {
                    upsert: true
                }
            )
            return HttpStatus.OK
        } catch (err) {
            return HttpStatus.I_AM_A_TEAPOT
        }
    }

/*
    public connection : mongoose.Connection
    public package
    public packages

    constructor() {
        mongoose.connect(process.env.MONGO_PACKAGES)
        this.connection = mongoose.connection
        this.package = new mongoose.Schema(
            {
                versions : Map<String, PackageTypeMongo>
            }
        )
        this.packages = mongoose.model("packages", this.package)
    }

/*
    async uploadNew(obj : Package) : Promise<HttpStatus> {
        if (semver.valid(obj.version)) {
            await this.push(`:packages:${obj.name}:${obj.version}`, obj)
            await this.save()
            return HttpStatus.OK
        } else {
            return HttpStatus.BAD_REQUEST
        }
    }
*/
}