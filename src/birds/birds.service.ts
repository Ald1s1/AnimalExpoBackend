import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bird } from 'src/schemas/Birds.schema';
import { CreateBirdDto } from './dtos/CreateBird.dto';

@Injectable()
export class BirdsService {
  constructor(@InjectModel(Bird.name) private birdModel: Model<Bird>) {}

  async create(createBirdDto: CreateBirdDto): Promise<Bird> {
    const createdBird = new this.birdModel(createBirdDto);
    return createdBird.save();
  }

  async findAll(): Promise<Bird[]> {
    return this.birdModel.find().exec();
  }

  async findOne(id: string): Promise<Bird> {
    return this.birdModel.findById(id).exec();
  }
  async delete(id: string): Promise<Bird> {
    return this.birdModel.findByIdAndDelete(id).exec();
  }

  async update(id: string, createBirdDto: CreateBirdDto): Promise<Bird> {
    return this.birdModel
      .findByIdAndUpdate(id, createBirdDto, { new: true })
      .exec();
  }
}
