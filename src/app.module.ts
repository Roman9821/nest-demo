import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersController } from './users/users.controller';
import { ColorsController } from './colors/colors.controller';
import { UserService } from './users/users.service';
import { ColorService } from './colors/colors.service';
import { UserSchema } from './users/user.model';
import { ColorSchema } from './colors/color.model';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:jftJS60hhP1tQVJg@cluster0.khfaz.mongodb.net/nest-project?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'Color', schema: ColorSchema }]),
  ],
  controllers: [UsersController, ColorsController],
  providers: [UserService, ColorService],
})
export class AppModule {}
