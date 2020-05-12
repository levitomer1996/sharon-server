import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { User } from '../auth/user.entity';
import { Comment } from './comment/comment.entiry';
import { ArticleCategory } from './article.enum';
import { Like } from './like/like.entity';

@Entity()
export class Article extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  img: string;
  @Column()
  content: string;
  //   @Column()
  //   comments: Comment[];

  @Column()
  category: ArticleCategory;
  @Column()
  time_Created: string;
  @ManyToOne(
    type => User,
    user => user.articles,
    { eager: false },
  )
  email: User;
  @OneToMany(
    type => Comment,
    comment => comment.article,
    { eager: true },
  )
  comments: Comment[];

  @OneToMany(
    type => Like,
    like => like.article,
    { eager: true },
  )
  like: Like[];
}
