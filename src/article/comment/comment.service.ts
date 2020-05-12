import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentRepository } from './comment.repository';
import { postCommentDto } from './DTO/comment.dto';
import { Comment } from '../comment/comment.entiry';
import { ArticleRepository } from '../article.repository';
import { Article } from '../article.entity';
import { User } from 'src/auth/user.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentRepository)
    private commentRepository: CommentRepository,
    private articleRepository: ArticleRepository,
  ) {}

  async postComment(dto: postCommentDto): Promise<Comment> {
    return this.commentRepository.postComment(dto);
  }

  async getComments(articleId: number): Promise<Article> {
    return this.articleRepository.getArticleComments(articleId);
  }

  async deleteComment(commentId: number, user: User): Promise<void> {
    const result = await this.commentRepository.delete({ id: commentId });

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${commentId}" not found`);
    }
  }
}
