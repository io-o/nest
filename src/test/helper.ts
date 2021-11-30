/*
 * @Author: Andrew Q
 * @Date: 2021-11-26 11:15:12
 * @LastEditors: Andrew Q
 * @LastEditTime: 2021-11-26 12:00:25
 * @Description:
 */

export function getJson(file, excelIO, GC) {
  return new Promise((reslove, reject) => {
    excelIO.open(
      file.buffer,
      (data) => {
        const wb = new GC.Spread.Sheets.Workbook();
        wb.fromJSON(data);

        reslove(wb);
      },
      function (e) {
        reject(e);
      },
    );
  });
}
