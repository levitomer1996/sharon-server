import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { JwtPayload } from './jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { LoginCredentialDTO } from './dto/auth-login-dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  signUp(AuthCredentialsDto: AuthCredentialsDto): Promise<{ status }> {
    return this.userRepository.signUp(AuthCredentialsDto);
  }
  async signIn(
    authCredentialsDto: LoginCredentialDTO,
  ): Promise<{ accessToken: string; f_name }> {
    const email = await this.userRepository.validateUserPassword(
      authCredentialsDto,
    );

    if (!email.email) {
      throw new UnauthorizedException(
        'Invalid detials. Youre user or password details are wrong. ',
      );
    }

    const payload: JwtPayload = {
      email: email.email,
      isAdmin: email.isAdmin,
      f_name: email.f_name,
      l_name: email.l_name,
      id: email.id,
    };
    const accessToken = await this.jwtService.sign(payload);

    return { accessToken, f_name: email.f_name };
  }

  async validateToken(token: string): Promise<any> {
    try {
      const validatedToken = await this.jwtService.verify(token);
      return validatedToken;
    } catch (error) {
      return { error: error.name };
    }
  }
}
