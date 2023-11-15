import { PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import * as argon2 from 'argon2';

export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true,})
  username: string;

  @Column()
  email: string;

  @Column({ default: '' ,nullable:true})
  bio: string;

  @Column({ default: '' ,nullable:true})
  image: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await argon2.hash(this.password);
  }
}
