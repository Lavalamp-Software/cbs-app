import { HttpStatus } from '@nestjs/common';
import { PackagesService } from './packages.service';
export declare class PackagesController {
    private readonly service;
    constructor(service: PackagesService);
    getPackage(packagename: string): Promise<string>;
    uploadPackage(body: any): Promise<HttpStatus>;
}
