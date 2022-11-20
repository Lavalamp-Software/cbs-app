"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const port = 3000;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    console.log(`listening on http://127.0.0.1:${port}`);
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map