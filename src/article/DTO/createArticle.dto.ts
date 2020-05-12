import { IsNotEmpty, IsString, IsEnum, IsIn } from 'class-validator';

import { ArticleCategory } from '../article.enum';

export class CreateArticleDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  img: string;

  @IsNotEmpty()
  content: string;

  @IsIn([
    ArticleCategory.sustainability,
    ArticleCategory.greenlandscape,
    ArticleCategory.nutrition,
    ArticleCategory.healthlifestyle,
  ])
  category: ArticleCategory;
}
