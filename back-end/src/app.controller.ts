import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

import { AppService } from './app.service';
import { ModuleService } from './module.service';
import { DetailService } from './detail.service';
import { LogService } from './log.service';

import { Module as ModuleModel, Detail as DetailModel, Log as LogModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly moduleService: ModuleService,
    private readonly detailService: DetailService,
    private readonly logService: LogService,
  ) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get('module/:id')
  async getPostById(@Param('id') id: string): Promise<ModuleModel> {
    return this.moduleService.module({ id: Number(id) });
  }

  
}
