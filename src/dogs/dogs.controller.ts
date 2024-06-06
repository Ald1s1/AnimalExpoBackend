import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dtos/CreateDog.dto';
import { Dog } from 'src/schemas/Dogs.schema';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Post()
  async create(@Body() createDogDto: CreateDogDto): Promise<Dog> {
    return this.dogsService.create(createDogDto);
  }

  @Get()
  async findAll(): Promise<Dog[]> {
    return this.dogsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Dog> {
    return this.dogsService.findOne(id);
  }

  @Delete(':id')
  async deleteDogs(@Param('id') id: string) {
    return this.dogsService.delete(id);
  }

  @Put(':id')
  async updateDog(@Param('id') id: string, @Body() createDogDto: CreateDogDto) {
    return this.dogsService.update(id, createDogDto);
  }
}
