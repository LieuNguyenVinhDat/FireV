import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  User,
  UserDocument,
} from "src/schemas/user.schema";
@Injectable()
export class UserService {
  constructor(@InjectModel('user') private userModel: Model<UserDocument>) { }

  async createUser(user: User) {
    let createUser = new this.userModel(user);
    await createUser.save();
  }

  async findByUserId(id: string) {
    return await this.userModel.findById(id);
  }

  async findAllUser() {
    return await this.userModel.find();
  }

  async deleteUser(id: string) {
    return await this.userModel.findByIdAndDelete(id);
  }
}
