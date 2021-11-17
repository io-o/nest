/*
 * @Author: Andrew Q
 * @Date: 2021-11-16 16:25:53
 * @LastEditors: Andrew Q
 * @LastEditTime: 2021-11-16 16:25:54
 * @Description: test
 */
import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';

@Module({
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
