import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcryptjs';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { LoginCredentialDTO } from './dto/auth-login-dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredetialsDto: AuthCredentialsDto) {
    const { password, email, f_name, l_name } = authCredetialsDto;

    const exist = this.findOne({ email });

    const user = new User();

    user.email = email;
    user.f_name = f_name;
    user.l_name = l_name;
    user.isAdmin = true;
    user.salt = await bcrypt.genSalt();

    user.password = await this.hashPassword(password, user.salt);
    try {
      await user.save();
      return { status: 200 };
    } catch (error) {
      if (error === '23505') {
        throw new ConflictException(error);
      } else {
        throw new InternalServerErrorException(error);
      }
    }
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }

  async validateUserPassword(
    authCredentialsDto: LoginCredentialDTO,
  ): Promise<{ email; isAdmin; f_name; l_name; id }> {
    const { email, password } = authCredentialsDto;
    const user = await this.findOne({ email });
    const isAdmin = user.isAdmin;
    const f_name = user.f_name;
    const l_name = user.l_name;
    const id = user.id;
    if (user && (await user.validatePassword(password))) {
      return { email: user.email, isAdmin, f_name, l_name, id };
    } else {
      return null;
    }
  }
}
