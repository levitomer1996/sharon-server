import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { postCommentDto } from './DTO/comment.dto';
import { GetUser } from 'src/auth/GetUser.decorator';
import { User } from 'src/auth/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { CommentService } from './comment.service';
import { Comment } from '../comment/comment.entiry';
import { Article } from '../article.entity';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}
  @Post('post')
  @UseGuards(AuthGuard())
  postComment(@Body() obj, @GetUser() user: User): Promise<Comment> {
    const { content, article, ownerName } = obj;
    const dto = { content, article, user, ownerName };
    return this.commentService.postComment(dto);
  }

  @Get('getcomments')
  getComments(@Body() articleId: number): Promise<Article> {
    return this.commentService.getComments(articleId);
  }

  @Delete('/:id')
  @UseGuards(AuthGuard())
  deleteTask(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<void> {
    return this.commentService.deleteComment(id, user);
  }
}
