import { User } from 'src/auth/user.entity';
import { Article } from 'src/article/article.entity';

export class postCommentDto {
  user: User;
  article: Article;
  content: string;
  ownerName: string;
}
