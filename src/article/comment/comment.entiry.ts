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
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  content: string;
  @Column()
  ownerName: string;
  @Column()
  time_Created: string;
  @ManyToOne(
    type => Article,
    article => article.comments,
    { eager: false },
  )
  article: Article;
  @ManyToOne(
    type => User,
    user => user.comment,
    { eager: false },
  )
  user: User;
}
