import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Cat extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  kind: string;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true })
  shortDescription: string;

  @Prop({ required: true })
  fullDescription: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
