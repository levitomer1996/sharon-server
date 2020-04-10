import {
  Entity,
  BaseEntity,
  Unique,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  password: string;
  @Column()
  salt: string;
  @Column()
  email: string;
  @Column()
  f_name: string;
  @Column()
  l_name: string;

  async passwordValidation(password: string): Promise<boolean> {
    const hash = bcrypt.hash(password, this.password);
    if (hash) {
      return true;
    } else {
      return false;
    }
  }
}
