import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ArticleModule } from './article/article.module';
import { CommentController } from './article/comment/comment.controller';
import { CommentModule } from './article/comment/comment.module';
import { CommentGateway } from './article/comment/comment.gateway';
import { LikeModule } from './article/like/like.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    ArticleModule,
    CommentModule,
    LikeModule,
  ],
  providers: [CommentGateway],
})
export class AppModule {}
