import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {
  Module,
  Prisma
} from '@prisma/client';

@Injectable()
export class ModuleService {
  constructor(private prisma: PrismaService) {}

  async module(moduleWhereUniqueInput: Prisma.ModuleWhereUniqueInput): Promise<Module | null> {
    return this.prisma.module.findUnique({
        where: moduleWhereUniqueInput,
      });
    }

    async modules(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ModuleWhereUniqueInput;
        where?: Prisma.ModuleWhereInput;
        orderBy?: Prisma.ModuleOrderByWithRelationInput;
    }): Promise<Module[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.module.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createModules(data: Prisma.ModuleCreateInput): Promise<Module> {
        return this.prisma.module.create({
            data,
        });
    }

    async updateModule(params: {
        where: Prisma.ModuleWhereUniqueInput;
        data: Prisma.ModuleUpdateInput;
    }): Promise<Module> {
    const { where, data } = params;
    return this.prisma.module.update({
            data,
            where,
        });
    }

    async deleteUser(where: Prisma.ModuleWhereUniqueInput): Promise<Module> {
    return this.prisma.module.delete({
            where,
        });
    }
}