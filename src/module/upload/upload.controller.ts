/*
 * @Author: Andrew Q
 * @Date: 2021-11-19 14:54:22
 * @LastEditors: Andrew Q
 * @LastEditTime: 2021-11-19 15:11:03
 * @Description:
 */
import {
  Post,
  Controller,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('file')
@UseInterceptors(FileInterceptor('file'))
export class UploadController {
  @Post()
  uploadFile(@UploadedFile() file) {
    console.log(file);
  }
}
