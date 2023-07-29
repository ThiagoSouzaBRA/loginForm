import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, ValidationPipe} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //Create a new User
  @Post()
  async create(@Res() res: Response, @Body(new ValidationPipe()) createUserDto: UserDto) {
      let newUser = await this.userService.create(createUserDto)
      return res.status(201).json({"data": newUser, "message": "User Created."});
  }

  //Find all User
  @Get()
  findAll() {
    return this.userService.findAll();
  }


  //Find user by ID
  @Get(':id')
  async findOne(@Res() res : Response, @Param('id') id: string) {
    try{
      const user = await this.userService.findOne(id);
      if(user){
        return res.status(200).json({user})
      }
    }catch(err){
      return res.status(200).json({message: "User not found."})
    }
  }

  //Update user by ID
  @Patch(':id')
  async update(@Res() res: Response, @Param('id') id: string, @Body(new ValidationPipe()) updateUserDto: UserDto) {
    const updateUser = await this.userService.update(id, updateUserDto);
    if(updateUser.matchedCount > 0){
      return res.status(200).json({message: "User updated successfully.", updateUser: updateUserDto})
    }

    return res.status(400).json({message: "Failed to update user."})
  }

  //Delete user by ID
  @Delete(':id')
  async remove(@Res() res : Response, @Param('id') id: string) {
    const deleteUser = await this.userService.remove(id);
    if(deleteUser.deletedCount > 0){
      return res.status(200).json({message: "User deleted successfully."})
    }

    return res.status(400).json({message: "Failed to delete User."})
  }

  //Delete all users
  @Delete()
  async removeAll(@Res() res : Response){
    const removeUsers = await this.userService.removeAll()
    if(removeUsers.deletedCount > 0) {
      return res.status(200).json({message: `${removeUsers.deletedCount} Users Deleted.`})
    }
    
    return res.status(200).json({message: "No users to delete."})
  }
}
