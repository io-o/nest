/*
 * @Author: Andrew Q
 * @Date: 2021-11-09 16:37:55
 * @LastEditors: Andrew Q
 * @LastEditTime: 2021-11-09 16:54:13
 * @Description:
 */
import {
  Controller,
  Get,
  Delete,
  Post,
  Patch,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { PedantsTypeDto } from './dto/create-pedants-type';

@Controller('pedants-type')
export class PedantsTypeController {
  @Get()
  getPedantsType(): string {
    // console.log(requset)
    return '哇哦，拿到了所有挂件类型';
  }

  @Get('/:id')
  getPedantsTypeById(@Param('id') id: number) {
    console.log('=======&gt;', id);
    return `${typeof id} and id is ${id}`;
  }

  @Post()
  createPedtansType(@Body() createPedantsTypeDto: PedantsTypeDto) {
    const { sort, name } = createPedantsTypeDto;
    console.log('body DTO ========&gt;', name, sort);
    return '新建一个挂件类型';
  }

  @Patch()
  updatePedantsType(@Query('id') id: number) {
    console.log('query=======&gt;', id);
    return '更新某一个挂件类型';
  }

  @Delete()
  deletePedantsType() {
    return '删除某一个挂件类型';
  }
}
