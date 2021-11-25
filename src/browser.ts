/*
 * @Author: Andrew Q
 * @Date: 2021-11-19 18:10:38
 * @LastEditors: Andrew Q
 * @LastEditTime: 2021-11-22 15:00:13
 * @Description:
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mockBrowser = require('mock-browser').mocks.MockBrowser;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fileReader = require('filereader');

export function browser() {
  global.window = mockBrowser.createWindow();
  global.document = window.document;
  global.navigator = window.navigator;
  global.HTMLCollection = window.HTMLCollection;
  global.getComputedStyle = window.getComputedStyle;

  global.FileReader = fileReader;
}
