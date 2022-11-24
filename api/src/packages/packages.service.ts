import { HttpStatus, Injectable } from '@nestjs/common';
import { PackageClient } from 'src/db';
import { PackageType } from 'src/types';

@Injectable()
export class PackagesService {

    async getNewestPackage(packagename : string) {
        /*try {
            let versionPkgs = await dbSession.getData(`;packages;${packagename}`)
            console.log(versionPkgs)
            console.log(Object.keys(versionPkgs))
            
        } catch (err) {
            console.log(err)
            return ""
        }*/
    }

    async getAllPackages() {

    }

    async getPackage(packagename : string, version : string) : Promise<string | HttpStatus> {
        const db = new PackageClient()
        const pkg = await db.collection.findOne({name: packagename, version: version})
        
        /*
        console.log(packagename)
        console.log(version)
        let pkg : Package
        try {
            pkg = await dbSession.getData(`:packages:${packagename}:${version}`) as Package
        } catch (err) {
            console.log(err)
            return HttpStatus.NOT_FOUND
        }
        console.log(pkg)
        return JSON.parse(
            JSON.stringify(
                pkg
            )
        )
        */
       return ""
    }
    async uploadPackage(obj : PackageType) : Promise<HttpStatus> {
        //return await dbSession.uploadNew(obj)
        const db = new PackageClient()
        return await db.insertPackage(obj)
        
    }
}
