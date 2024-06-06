import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { Dog } from 'src/schemas/Dogs.schema';
import { DogSchema } from 'src/schemas/Dogs.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Dog.name, schema: DogSchema }])],
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}
