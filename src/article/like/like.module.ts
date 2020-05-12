import { Module } from '@nestjs/common';
import { LikeController } from './like.controller';
import { LikeService } from './like.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikeRepository } from './like.repository';
import { ArticleRepository } from '../article.repository';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([LikeRepository, ArticleRepository]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [LikeController],
  providers: [LikeService],
})
export class LikeModule {}
