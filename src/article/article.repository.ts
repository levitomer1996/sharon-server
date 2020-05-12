import { EntityRepository, Repository } from 'typeorm';
import { Article } from './article.entity';
import { Logger, InternalServerErrorException } from '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { Comment } from '../article/comment/comment.entiry';
import { getRepository } from 'typeorm';
import { UserRepository } from 'src/auth/user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateArticleDto } from './DTO/createArticle.dto';
import { ArticleCategory } from './article.enum';
import * as moment from 'moment';

@EntityRepository(Article)
export class ArticleRepository extends Repository<Article> {
  @InjectRepository(User) private userRepository;
  private logger = new Logger('ArticleRepository');

  async createArticle(dto: CreateArticleDto, user: User): Promise<Article> {
    const { title, img, content, category } = dto;

    const article = new Article();
    article.title = title;
    article.img = img;
    article.content = content;
    article.category = category;
    article.time_Created = moment(Date.now()).format('MMM Do YY');

    article.email = user;
    try {
      await article.save();
    } catch (error) {
      this.logger.error(
        `Failed to create a task for user "${user}". Data: ${dto}`,
        error.stack,
      );
      throw new InternalServerErrorException();
    }

    return article;
  }

  async getAllArticles(): Promise<Article[]> {
    const articleList = await this.find();
    return articleList;
  }

  async getArticleByCategory(category: ArticleCategory): Promise<Article[]> {
    const articleList = await this.find({
      where: [{ category: category }],
    });
    if (articleList.length === 0) {
      throw new InternalServerErrorException(
        `There are no articles under category ${category}`,
      );
    } else {
      return articleList;
    }
  }
  async getArticleById(id: number): Promise<Article> {
    const article = await this.findOne({
      where: [{ id: id }],
    });

    if (!article) {
      throw new InternalServerErrorException();
    } else {
      return article;
    }
  }
  async getArticleComments(articleId: number): Promise<Article> {
    const article = await this.findOne({
      where: [{ id: articleId }],
    });

    return article;
  }
}
