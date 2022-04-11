import { Injectable } from '@nestjs/common';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class ModuleService {
  constructor(private prisma: PrismaService) {}

  async create(createModuleDto: CreateModuleDto) {
    return await this.prisma.module.create({
      data:{
        name: createModuleDto.name,
        type: createModuleDto.type,
        city: createModuleDto.city,

        detail: {
          create: {
            value: +createModuleDto.value,
            duration: +createModuleDto.duration,
            number: +createModuleDto.number,
            state: +createModuleDto.state? true : false
          }
        }
      }
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

  async remove(id: number) {
    return await this.prisma.module.delete({
      where: { id: id },
    });
  }
}
