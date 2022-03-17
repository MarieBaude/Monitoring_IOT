import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuleModule } from './module/module.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ModuleModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
