import { EntityRepository, Repository } from 'typeorm';
import { Comment } from './comment.entiry';
import { postCommentDto } from './DTO/comment.dto';
import * as moment from 'moment';
import { InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Comment)
export class CommentRepository extends Repository<Comment> {
  async postComment(dto: postCommentDto): Promise<Comment> {
    const comment = new Comment();
    const { user, content, article, ownerName } = dto;
    comment.user = user;
    comment.article = article;
    comment.content = content;
    comment.ownerName = ownerName;
    comment.time_Created = moment(Date.now()).format('MMM Do YY');

    try {
      await comment.save();
    } catch (error) {
      throw new InternalServerErrorException();
    }
    return comment;
  }
}
