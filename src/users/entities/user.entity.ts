/*
 * @Author: Andrew Q
 * @Date: 2021-11-15 16:45:03
 * @LastEditors: Andrew Q
 * @LastEditTime: 2021-11-15 16:45:03
 * @Description: user实体
 */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
