/*
 * @Author: Andrew Q
 * @Date: 2021-11-14 14:21:49
 * @LastEditors: Andrew Q
 * @LastEditTime: 2021-11-16 15:06:26
 * @Description: test
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {} from '../config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PedantsTypeModule } from './pedants-type/pedants-type.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

import { envment } from '../config';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...envment.db,
      entities: [User],
    }),
    PedantsTypeModule,
    UsersModule,
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
