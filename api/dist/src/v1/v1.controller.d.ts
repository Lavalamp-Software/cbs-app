import { HttpStatus } from '@nestjs/common';
import { V1Service } from './v1.service';
export declare class V1Controller {
    private readonly service;
    constructor(service: V1Service);
    uploadPackage(): HttpStatus;
}
