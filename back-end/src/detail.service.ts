import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {
  Detail,
  Prisma
} from '@prisma/client';

@Injectable()
export class DetailService {
  constructor(private prisma: PrismaService) {}

  async Detail(DetailWhereUniqueInput: Prisma.DetailWhereUniqueInput): Promise<Detail | null> {
    return this.prisma.detail.findUnique({
        where: DetailWhereUniqueInput,
      });
    }

    async Details(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.DetailWhereUniqueInput;
        where?: Prisma.DetailWhereInput;
        orderBy?: Prisma.DetailOrderByWithRelationInput;
    }): Promise<Detail[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.detail.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createDetails(data: Prisma.DetailCreateInput): Promise<Detail> {
        return this.prisma.detail.create({
            data,
        });
    }

    async updateDetail(params: {
        where: Prisma.DetailWhereUniqueInput;
        data: Prisma.DetailUpdateInput;
    }): Promise<Detail> {
    const { where, data } = params;
    return this.prisma.detail.update({
            data,
            where,
        });
    }

    async deleteUser(where: Prisma.DetailWhereUniqueInput): Promise<Detail> {
    return this.prisma.detail.delete({
            where,
        });
    }
}