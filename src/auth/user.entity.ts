import {
  Entity,
  BaseEntity,
  Unique,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Article } from 'src/article/article.entity';
import { Comment } from '../article/comment/comment.entiry';
import { Like } from 'src/article/like/like.entity';

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
  @Column()
  isAdmin: boolean;
  @OneToMany(
    type => Article,
    article => article.email,
    { eager: true },
  )
  articles: Article[];
  @OneToMany(
    type => Comment,
    comment => comment.user,
    { eager: true },
  )
  comment: Comment[];

  @OneToMany(
    type => Like,
    like => like.user,
    { eager: true },
  )
  like: Like[];

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
