import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PackagesController } from './packages/packages.controller';
import { PackagesService } from './packages/packages.service';
import { PackagesModule } from './packages/packages.module';

@Module({
  imports: [PackagesModule],
  controllers: [AppController, PackagesController],
  providers: [AppService, PackagesService],
})
export class AppModule {}
