import { HttpStatus, Injectable } from '@nestjs/common';
import { dbSession, Package, PackageClient } from 'dbUtil';

@Injectable()
export class PackagesService {
    async getPackage(packagename : string) : Promise<string> {
        console.log(packagename)
        let pkg : Promise<any>
        try {
            pkg = await dbSession.getData(`.packages.${packagename}`)
        } catch (err) {
            console.log(err)
            return ""
        }
        console.log(pkg)
        return JSON.parse(
            JSON.stringify(
                pkg
            )
        )
    }
    async uploadPackage(obj : Package) : Promise<HttpStatus> {
        dbSession.push(`.packages.${obj.name}`, obj)
        return HttpStatus.OK
    }
}
