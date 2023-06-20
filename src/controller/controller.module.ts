import { Module } from '@nestjs/common';
import { CookieController } from './cookie/cookie.controller';
import { ServiceModule } from 'src/service/service.module';

@Module({
  controllers: [CookieController],
  imports: [ServiceModule],
})
export class ControllerModule {}
