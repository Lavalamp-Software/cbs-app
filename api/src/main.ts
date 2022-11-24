import { NestFactory } from '@nestjs/core';
import { PackageClient } from './db';
import { AppModule } from './app.module';
require("dotenv").config()

const port : number = 3000

async function bootstrap() {
  console.log(process.env.MONGO)
  console.log('hi')
  const app = await NestFactory.create(AppModule);
  const db = new PackageClient()
  console.log(`listening on http://127.0.0.1:${port}`)
  await app.listen(port);
}
bootstrap();
