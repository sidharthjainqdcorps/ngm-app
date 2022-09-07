import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './schema/cats.schema';
import { CatInput } from './input/cat.input';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  //Mutation crateCat
  async create(createCatDto: CatInput): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  //Query find all cats from db
  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }


  // query getcatbyid - all details

  // mutation -- delete


  // mutation -- update
}
