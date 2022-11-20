import { NestFactory } from '@nestjs/core';
import { dbSession, PackageClient } from '../dbUtil';
import { AppModule } from './app.module';

const port : number = 3000

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  console.log(`listening on http://127.0.0.1:${port}`)
  await app.listen(port);
}
bootstrap();
