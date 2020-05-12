import { EntityRepository, Repository } from 'typeorm';
import { Like } from './like.entity';

import * as moment from 'moment';
import { InternalServerErrorException } from '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { LikeDto } from './DTO/like.dto';

@EntityRepository(Like)
export class LikeRepository extends Repository<Like> {
  //   async postComment(dto: postCommentDto): Promise<Comment> {
  //     const comment = new Comment();
  //     const { user, content, article, ownerName } = dto;
  //     comment.user = user;
  //     comment.article = article;
  //     comment.content = content;
  //     comment.ownerName = ownerName;
  //     comment.time_Created = moment(Date.now()).format('MMM Do YY');
  //     try {
  //       await comment.save();
  //     } catch (error) {
  //       throw new InternalServerErrorException();
  //     }
  //     return comment;
  //   }

  async addLike(dto: LikeDto) {
    const like = new Like();
    const { article, user } = dto;
    like.user = user;
    like.article = article;
    try {
      await like.save();
    } catch (error) {
      throw new InternalServerErrorException();
    }
    return like;
  }
}
