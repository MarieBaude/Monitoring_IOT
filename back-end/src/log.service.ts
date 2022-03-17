import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {
  Log,
  Prisma
} from '@prisma/client';

@Injectable()
export class LogService {
  constructor(private prisma: PrismaService) {}

  async Log(LogWhereUniqueInput: Prisma.LogWhereUniqueInput): Promise<Log | null> {
    return this.prisma.log.findUnique({
        where: LogWhereUniqueInput,
      });
    }

    async Logs(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.LogWhereUniqueInput;
        where?: Prisma.LogWhereInput;
        orderBy?: Prisma.LogOrderByWithRelationInput;
    }): Promise<Log[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.log.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createLogs(data: Prisma.LogCreateInput): Promise<Log> {
        return this.prisma.log.create({
            data,
        });
    }

    async updateLog(params: {
        where: Prisma.LogWhereUniqueInput;
        data: Prisma.LogUpdateInput;
    }): Promise<Log> {
    const { where, data } = params;
    return this.prisma.log.update({
            data,
            where,
        });
    }

    async deleteUser(where: Prisma.LogWhereUniqueInput): Promise<Log> {
    return this.prisma.log.delete({
            where,
        });
    }
}