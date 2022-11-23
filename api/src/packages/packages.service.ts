import { HttpStatus, Injectable } from '@nestjs/common';
import { dbSession, Package, PackageClient } from 'dbUtil';

@Injectable()
export class PackagesService {

    async getNewestPackage(packagename : string) {
        try {
            let versionPkgs = await dbSession.getData(`;packages;${packagename}`)
            console.log(versionPkgs)
            console.log(Object.keys(versionPkgs))
            
        } catch (err) {
            console.log(err)
            return ""
        }
    }

    async getPackage(packagename : string, version : string) : Promise<string | HttpStatus> {
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
    }
    async uploadPackage(obj : Package) : Promise<HttpStatus> {
        return await dbSession.uploadNew(obj)
    }
}
