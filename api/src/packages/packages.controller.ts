import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { PackagesService } from './packages.service';

@Controller('packages')
export class PackagesController {
    constructor(private readonly service : PackagesService) {}

    @Get(":packagename/:version")
    async getPackage(@Param("packagename") packagename : string, @Param("version") version : string) : Promise<string | HttpStatus> {
        return await this.service.getPackage(packagename, version)
    }

    @Get()
    async getAllPackages() {
        return await this.service.getAllPackages()
    }

    @Post()
    async uploadPackage(@Body() body) : Promise<HttpStatus> {
        return await this.service.uploadPackage(body)
    }
}
