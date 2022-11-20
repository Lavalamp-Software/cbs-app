import { HttpStatus } from '@nestjs/common';
import { Package } from 'dbUtil';
export declare class PackagesService {
    getPackage(packagename: string): Promise<string>;
    uploadPackage(obj: Package): Promise<HttpStatus>;
}
