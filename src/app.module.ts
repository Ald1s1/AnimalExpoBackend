import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { BirdsModule } from './birds/birds.module';
import { DogsModule } from './dogs/dogs.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/animalexpo'),
    CatsModule,
    BirdsModule,
    DogsModule,
  ],
})
export class AppModule {}
