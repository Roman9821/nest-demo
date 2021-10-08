import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Color } from './color.model';

@Injectable()
export class ColorService {
  constructor(
    @InjectModel('Color') private readonly colorModel: Model<Color>,
  ) {}

  async getColors() {
    const result = await this.colorModel.find();
    return result;
  }
}
