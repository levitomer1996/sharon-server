import { Controller, Patch, UseGuards, Post, Body } from '@nestjs/common';
import { LikeService } from './like.service';
import { GetUser } from 'src/auth/GetUser.decorator';
import { AuthGuard } from '@nestjs/passport';
import { LikeDto } from './DTO/like.dto';

@Controller('like')
export class LikeController {
  constructor(private likeService: LikeService) {}
  @UseGuards(AuthGuard())
  @Post('addlike')
  addLike(@GetUser() user, @Body() obj) {
    const { article } = obj;
    const dto = { user, article };
    return this.likeService.addLike(dto);
  }
}
