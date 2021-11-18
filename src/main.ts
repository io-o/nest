/*
 * @Author: Andrew Q
 * @Date: 2021-11-09 17:09:49
 * @LastEditors: Andrew Q
 * @LastEditTime: 2021-11-17 15:08:52
 * @Description:
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const options = new DocumentBuilder()
    .setTitle('api')
    .setDescription('api')
    .setVersion('1.0')
    .addTag('api')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
