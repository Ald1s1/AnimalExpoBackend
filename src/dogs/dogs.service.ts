import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dog } from 'src/schemas/Dogs.schema';
import { CreateDogDto } from './dtos/CreateDog.dto';

@Injectable()
export class DogsService {
  constructor(@InjectModel(Dog.name) private dogModel: Model<Dog>) {}

  async create(createDogDto: CreateDogDto): Promise<Dog> {
    const createdDog = new this.dogModel(createDogDto);
    return createdDog.save();
  }

  async findAll(): Promise<Dog[]> {
    return this.dogModel.find().exec();
  }

  async findOne(id: string): Promise<Dog> {
    return this.dogModel.findById(id).exec();
  }
  async delete(id: string): Promise<Dog> {
    return this.dogModel.findByIdAndDelete(id).exec();
  }

  async update(id: string, createDogDto: CreateDogDto): Promise<Dog> {
    return this.dogModel
      .findByIdAndUpdate(id, createDogDto, { new: true })
      .exec();
  }
}
