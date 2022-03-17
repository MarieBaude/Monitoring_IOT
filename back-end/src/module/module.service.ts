import { Injectable } from '@nestjs/common';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class ModuleService {
  constructor(private prisma: PrismaService) {}

  create(createModuleDto: CreateModuleDto) {
    return 'This action adds a new module';
  }

  async findAll() {
    return this.prisma.module.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} module`;
  }

  update(id: number, updateModuleDto: UpdateModuleDto) {
    return `This action updates a #${id} module`;
  }

  remove(id: number) {
    return `This action removes a #${id} module`;
  }
}
