import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  UseGuards,
  Logger,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard, PassportModule } from '@nestjs/passport';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './DTO/createArticle.dto';
import { Article } from './article.entity';
import { GetUser } from '../auth/GetUser.decorator';
import { User } from 'src/auth/user.entity';
import { query } from 'express';
import { ArticleCategory } from './article.enum';

@Controller('article')
export class ArticleController {
  private logger = new Logger('article');
  constructor(private articleService: ArticleService) {}

  @Post('/createarticle')
  @UseGuards(AuthGuard())
  @UsePipes(ValidationPipe)
  createTask(
    @Body() articleDto: CreateArticleDto,
    @GetUser() user: User,
  ): Promise<Article> {
    console.log(user.email);

    if (user.isAdmin) {
      return this.articleService.createArticle(articleDto, user);
    } else {
      throw new UnauthorizedException('Only admin allowed to add article');
    }
  }

  @Get('/:id')
  getArticleByCategory(@Param('id') cartegory): Promise<Article[]> {
    return this.articleService.getArticleByCategory(cartegory);
  }

  @Get('/getarticlebyid/:id')
  getArticleById(@Param('id') id: number): Promise<Article> {
    return this.articleService.getArticleById(id);
  }
  @Get('/getall/feed')
  getAllArticles(): Promise<Article[]> {
    return this.articleService.getAllArticles();
  }

  @UseGuards(AuthGuard())
  @Post('/test')
  test(@Req() req, @GetUser() user) {
    if (!req.user.isAdmin) {
      return 'Not Allowed to create Article.';
    } else {
      return 'Allowed to Create Article';
    }
  }
}
