import { IsString } from 'class-validator';

export class LoginCredentialDTO {
  @IsString()
  email: string;
  @IsString()
  password: string;
}
