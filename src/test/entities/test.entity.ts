/*
 * @Author: Andrew Q
 * @Date: 2021-11-16 16:14:48
 * @LastEditors: Andrew Q
 * @LastEditTime: 2021-11-16 16:14:48
 * @Description: test
 */
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('test')
export class Test {
  @PrimaryColumn()
  id: string;
  @Column()
  title: string;

  @Column()
  link: string;
}
