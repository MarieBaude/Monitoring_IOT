import { Injectable } from '@nestjs/common';
import { CreateDetailDto } from './dto/create-detail.dto';
import { UpdateDetailDto } from './dto/update-detail.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DetailService {
  constructor(private prisma: PrismaService) {}

  create(createDetailDto: CreateDetailDto) {
    return 'This action adds a new detail';
  }

  async findAll() {
    return this.prisma.detail.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} detail`;
  }

  update(id: number, updateDetailDto: UpdateDetailDto) {
    return `This action updates a #${id} detail`;
  }

  remove(id: number) {
    return `This action removes a #${id} detail`;
  }
}
