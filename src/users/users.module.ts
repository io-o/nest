/*
 * @Author: Andrew Q
 * @Date: 2021-11-15 17:24:45
 * @LastEditors: Andrew Q
 * @LastEditTime: 2021-11-15 17:28:45
 * @Description:
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
