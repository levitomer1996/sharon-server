import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LikeRepository } from './like.repository';
import { User } from 'src/auth/user.entity';
import { LikeDto } from './DTO/like.dto';

@Injectable()
export class LikeService {
  constructor(
    @InjectRepository(LikeRepository)
    private likeRepository: LikeRepository,
  ) {}

  async addLike(dto: LikeDto) {
    return this.likeRepository.addLike(dto);
  }
}
