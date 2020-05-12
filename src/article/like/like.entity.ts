import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Article } from '../article.entity';
import { User } from 'src/auth/user.entity';

@Entity()
export class Like extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => User,
    user => user.like,
    { eager: false },
  )
  user: User;
  @ManyToOne(
    type => Article,
    article => article.like,
    { eager: false },
  )
  article: Article;
}
