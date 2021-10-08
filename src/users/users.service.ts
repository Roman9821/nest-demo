import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async insertUser(name: string, color: Array<string>) {
    const newUser = new this.userModel({ name, color });
    const result = await newUser.save();
    return result;
  }

  async getUsers() {
    const result = await this.userModel.find();
    return result;
  }
}
