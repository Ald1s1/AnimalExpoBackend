import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dtos/CreateCat.dto';
import { Cat } from 'src/schemas/Cats.schema';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Cat> {
    return this.catsService.findOne(id);
  }

  @Delete(':id')
  async deleteCat(@Param('id') id: string) {
    return this.catsService.delete(id);
  }

  @Put(':id')
  async updateCat(@Param('id') id: string, @Body() createCatDto: CreateCatDto) {
    return this.catsService.update(id, createCatDto);
  }
}
