import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UseGuards,
  Req,
  Param,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { LoginCredentialDTO } from './dto/auth-login-dto';
import { User } from './user.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './GetUser.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authSerivce: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) AuthCredentialsDto: AuthCredentialsDto,
  ): Promise<{ status }> {
    return this.authSerivce.signUp(AuthCredentialsDto);
  }
  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authCredentialsDto: LoginCredentialDTO,
  ): Promise<{ accessToken: string; f_name: string }> {
    return this.authSerivce.signIn(authCredentialsDto);
  }

  @Get('/validatetoken/:token')
  validateToken(@Param('token') token: string): Promise<any> {
    return this.authSerivce.validateToken(token);
  }
}
