import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { PackagesService } from './packages.service';

@Controller('packages')
export class PackagesController {
    constructor(private readonly service : PackagesService) {}

    @Get(":packagename")
    async getPackage(@Param("packagename") packagename : string) : Promise<string> {
        return await this.service.getPackage(packagename)
    }
    @Post()
    async uploadPackage(@Body() body) : Promise<HttpStatus> {
        return await this.service.uploadPackage(body)
    }
}
