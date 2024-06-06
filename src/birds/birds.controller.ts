import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { BirdsService } from './birds.service';
import { CreateBirdDto } from './dtos/CreateBird.dto';
import { Bird } from 'src/schemas/Birds.schema';

@Controller('birds')
export class BirdsController {
  constructor(private readonly birdsService: BirdsService) {}

  @Post()
  async create(@Body() createBirdDto: CreateBirdDto): Promise<Bird> {
    return this.birdsService.create(createBirdDto);
  }

  @Get()
  async findAll(): Promise<Bird[]> {
    return this.birdsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Bird> {
    return this.birdsService.findOne(id);
  }

  @Delete(':id')
  async deleteBird(@Param('id') id: string) {
    return this.birdsService.delete(id);
  }

  @Put(':id')
  async updateBird(
    @Param('id') id: string,
    @Body() createBirdDto: CreateBirdDto,
  ) {
    return this.birdsService.update(id, createBirdDto);
  }
}
