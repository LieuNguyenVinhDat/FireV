import { Controller, Get, Post, Body,Query, Delete } from '@nestjs/common';
import { User } from 'src/schemas/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/send')
  public async createUser(@Body()user: User){
      return await this.userService.createUser(user);
  }

  @Get('/')
  public async getUserById(@Query(`id`) id: string){
    console.log(id);
      return await this.userService.findByUserId(id);
  }

  @Get('all')
  public async getAllUsers() {
    return await this.userService.findAllUser();
  }

  @Delete('/delete')
  public async deleteUser(@Query(`id`) id: string) {
    return await this.userService.deleteUser(id);
  }
}
