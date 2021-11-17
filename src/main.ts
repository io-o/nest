/*
 * @Author: Andrew Q
 * @Date: 2021-11-09 17:09:49
 * @LastEditors: Andrew Q
 * @LastEditTime: 2021-11-09 17:09:49
 * @Description:
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(3000);
}
bootstrap();
