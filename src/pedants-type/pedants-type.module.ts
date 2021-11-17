/*
 * @Author: Andrew Q
 * @Date: 2021-11-09 16:58:42
 * @LastEditors: Andrew Q
 * @LastEditTime: 2021-11-09 16:58:42
 * @Description:
 */
import { Module } from '@nestjs/common';
import { PedantsTypeController } from './pedants-type.controller';

@Module({
  controllers: [PedantsTypeController],
})
export class PedantsTypeModule {}
