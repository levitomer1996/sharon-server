import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentRepository } from './comment.repository';
import { CommentController } from './comment.controller';
import { PassportModule } from '@nestjs/passport';
import { ArticleRepository } from '../article.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([CommentRepository, ArticleRepository]),

    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
