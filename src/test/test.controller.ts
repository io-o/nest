/*
 * @Author: Andrew Q
 * @Date: 2021-11-19 15:08:09
 * @LastEditors: Andrew Q
 * @LastEditTime: 2021-11-25 16:56:20
 * @Description:
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';

@Controller('test')
@UseInterceptors(FileInterceptor('file'))
export class TestController {
  public wb: any;
  public GC: any;
  public excelIO: any;
  public fileA: any;
  constructor(private readonly testService: TestService) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const GC = require('@grapecity/spread-sheets');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const GCExcel = require('@grapecity/spread-excelio');

    GC.Spread.Sheets.LicenseKey =
      'ti.ey.com.cn,445458482469559#B0NN3W88kQ4YnUhR4Y4BXNhZlc65UaNdVRvEXWxsGW4ZkNCBjQvN4d636ZxQjZGJXR7VVT036LPhHdhJzZGZTZVNUViZjbhN6R4skNrFlSyQHVqlzSElmTzZDMtRUdFtSY83UOzNzTa5USYt6bj5kZS5keRlEVUVzdsx4LyVXTtlTNjNlaCBDcBhVSxBDNFlHUhhFdNNzVONEetR4ZJhEauBVW62WeKpXaZ3mYqd4RJJDVyY6RoNDRQFEbXd6aXZGRWNFTNtWVCxGR58WMtVWRyVWei3WaVVWTwp6SkJmZSdFOIdXbrVUTllDc7F7Yv94dal6NZhVRalGdOJiOiMlIsIiN4cjRCJ4MyIiOigkIsAzN5YTO7kjM0IicfJye#4Xfd5nIFVUSWJiOiMkIsICNx8idgAyUKBCZhVmcwNlI0IiTis7W0ICZyBlIsIiMzcTN9ADI6ATMxAjMwIjI0ICdyNkIsIibj9SbvNmL9VmLpRnI0IyctRkIsICuPWOrFWOkZmeicauoviOqSWum8Seg2Sei2+evbWer8SOi2+OuwaeiuWuI0ISYONkIsISO5UTO6QjM8QDO5QTN4QjI0ICZJJCL3V6csFmZ0IiczRmI1pjIs9WQisnOiQkIsISP3c7U9IHbyBnaPhDatlnWrU5Y8gDbntSaOhVSrMjR6ElRz2mMx9WbudjNt3CT9N5TopUS4kDZ0F4dvVkdiBzczYHeRZ7QvlTOVJXcwIEZzcFM4JHOJtSNC3yUg1zd';

    GCExcel.LicenseKey =
      'ti.ey.com.cn,445458482469559#B0NN3W88kQ4YnUhR4Y4BXNhZlc65UaNdVRvEXWxsGW4ZkNCBjQvN4d636ZxQjZGJXR7VVT036LPhHdhJzZGZTZVNUViZjbhN6R4skNrFlSyQHVqlzSElmTzZDMtRUdFtSY83UOzNzTa5USYt6bj5kZS5keRlEVUVzdsx4LyVXTtlTNjNlaCBDcBhVSxBDNFlHUhhFdNNzVONEetR4ZJhEauBVW62WeKpXaZ3mYqd4RJJDVyY6RoNDRQFEbXd6aXZGRWNFTNtWVCxGR58WMtVWRyVWei3WaVVWTwp6SkJmZSdFOIdXbrVUTllDc7F7Yv94dal6NZhVRalGdOJiOiMlIsIiN4cjRCJ4MyIiOigkIsAzN5YTO7kjM0IicfJye#4Xfd5nIFVUSWJiOiMkIsICNx8idgAyUKBCZhVmcwNlI0IiTis7W0ICZyBlIsIiMzcTN9ADI6ATMxAjMwIjI0ICdyNkIsIibj9SbvNmL9VmLpRnI0IyctRkIsICuPWOrFWOkZmeicauoviOqSWum8Seg2Sei2+evbWer8SOi2+OuwaeiuWuI0ISYONkIsISO5UTO6QjM8QDO5QTN4QjI0ICZJJCL3V6csFmZ0IiczRmI1pjIs9WQisnOiQkIsISP3c7U9IHbyBnaPhDatlnWrU5Y8gDbntSaOhVSrMjR6ElRz2mMx9WbudjNt3CT9N5TopUS4kDZ0F4dvVkdiBzczYHeRZ7QvlTOVJXcwIEZzcFM4JHOJtSNC3yUg1zd';

    this.GC = GC;
    this.wb = new GC.Spread.Sheets.Workbook();
    this.excelIO = new GCExcel.IO();
  }

  // @Post()
  // create(@Body() createTestDto: CreateTestDto) {
  //   return this.testService.create(createTestDto);
  // }

  @Get()
  findAll() {
    return this.testService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestDto: UpdateTestDto) {
    return this.testService.update(+id, updateTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testService.remove(+id);
  }

  @Post('getExcel')
  getExcel() {
    return this.fileA;
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file) {
    console.log(file.buffer);

    this.excelIO.open(
      file.buffer.buffer,
      (data) => {
        this.wb.fromJSON(data);
        const z1 = this.wb.getSheet(5).getStyle(1, 1);
        // const style = new GC.Spread.Sheets.Style();
        z1.backColor = 'red';
        console.log(z1);

        this.wb.getSheet(5).setStyle(1, 1, z1);
        console.log('getStyle', this.wb.getSheet(5).getStyle(1, 1));

        this.fileA = this.wb.toJSON();
        //console.log(222, data, data.version, data.namedStyles);
      },
      function (e) {
        console.log(1111, e);
      },
    );
  }
}
