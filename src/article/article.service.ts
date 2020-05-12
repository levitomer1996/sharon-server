import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleRepository } from './article.repository';
import { Article } from './article.entity';
import { User } from 'src/auth/user.entity';
import { CreateArticleDto } from './DTO/createArticle.dto';
import { ArticleCategory } from './article.enum';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleRepository)
    private articleRepository: ArticleRepository,
  ) {}

  async createArticle(
    articleDto: CreateArticleDto,
    user: User,
  ): Promise<Article> {
    return this.articleRepository.createArticle(articleDto, user);
  }

  async getArticleByCategory(category: ArticleCategory): Promise<Article[]> {
    return this.articleRepository.getArticleByCategory(category);
  }

  async getArticleById(id: number): Promise<Article> {
    return this.articleRepository.getArticleById(id);
  }

  async getAllArticles(): Promise<Article[]> {
    return this.articleRepository.getAllArticles();
  }
}
