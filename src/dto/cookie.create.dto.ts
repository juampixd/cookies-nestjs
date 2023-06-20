import { IsNotEmpty, IsString } from 'class-validator';

export class CookieCreateDTO {
  @IsString()
  @IsNotEmpty()
  sessionId: string;

  @IsString()
  @IsNotEmpty()
  value: string;
}
