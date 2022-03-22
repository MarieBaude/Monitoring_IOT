import { Injectable } from '@nestjs/common';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class ModuleService {
  constructor(private prisma: PrismaService) {}

  async create(createModuleDto: CreateModuleDto) {
    return await this.prisma.module.create({
      data: createModuleDto
    });
  }

  async findAll() {
    return await this.prisma.module.findMany(
      {
      include: { 
        detail:true
       }
    }
    );
  }

  async findOne(id: number) {
    return await this.prisma.module.findUnique({
      where: { id: id },
      include: { detail: true }
    });
  }

  update(id: number, updateModuleDto: UpdateModuleDto) {
    return `This action updates a #${id} module`;
  }

  remove(id: number) {
    return `This action removes a #${id} module`;
  }
}
