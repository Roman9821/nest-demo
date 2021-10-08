import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async addUser(
    @Body('name') userName: string,
    @Body('color') color: Array<string>,
  ): Promise<any> {
    console.log(userName, color);

    const user = await this.userService.insertUser(userName, color);
    return { user };
  }

  @Get()
  async getUsers(): Promise<any> {
    const users = await this.userService.getUsers();
    return { users };
  }
}
