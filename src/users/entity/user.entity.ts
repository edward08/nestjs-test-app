import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type:'varchar',length:'50',nullable:false})
  name: string;

  @Column({ type:'varchar',length:'50',nullable:false})
  address: string;

}