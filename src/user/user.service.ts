import { Injectable, BadRequestException } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import {User, UserDocument} from './schema/user-schema';
import {Model} from 'mongoose';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel : Model<UserDocument>){
  }

  async create(createUserDto: UserDto) {
    return this.userModel.create(createUserDto);
  }

  findAll() {
    return this.userModel.find({})
  }

  async findOne(id: string) {
    return this.userModel.findById(id)
  }

  update(id: string, updateUserDto: UserDto) {
    return this.userModel.updateOne({_id: id}, updateUserDto);
  }

  remove(id: string) {
    return this.userModel.deleteOne({_id: id})
  }

  removeAll(){
    return this.userModel.deleteMany();
  }
}
