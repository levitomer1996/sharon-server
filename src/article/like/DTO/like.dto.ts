import { Article } from 'src/article/article.entity';
import { User } from 'src/auth/user.entity';

export class LikeDto {
  article: Article;
  user: User;
}
