/*
 * @Author: Andrew Q
 * @Date: 2021-11-16 14:43:20
 * @LastEditors: Andrew Q
 * @LastEditTime: 2021-11-16 15:05:15
 * @Description: 配置文件
 */
import * as dev from './env.dev';

const envconfig = {
  dev,
};

const envment = envconfig[process.env.NODE_ENV || 'dev'];

export { envment };
