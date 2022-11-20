"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesService = void 0;
const common_1 = require("@nestjs/common");
const dbUtil_1 = require("../../dbUtil");
let PackagesService = class PackagesService {
    async getPackage(packagename) {
        console.log(packagename);
        let pkg;
        try {
            pkg = await dbUtil_1.dbSession.getData(`.packages.${packagename}`);
        }
        catch (err) {
            console.log(err);
            return "";
        }
        console.log(pkg);
        return JSON.parse(JSON.stringify(pkg));
    }
    async uploadPackage(obj) {
        dbUtil_1.dbSession.push(`.packages.${obj.name}`, obj);
        return common_1.HttpStatus.OK;
    }
};
PackagesService = __decorate([
    (0, common_1.Injectable)()
], PackagesService);
exports.PackagesService = PackagesService;
//# sourceMappingURL=packages.service.js.map