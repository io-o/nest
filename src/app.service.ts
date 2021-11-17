/*
 * @Author: Andrew Q
 * @Date: 2021-11-16 16:02:32
 * @LastEditors: Andrew Q
 * @LastEditTime: 2021-11-16 16:02:33
 * @Description:
 */
import { Injectable } from '@nestjs/common';

// 装饰器
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
