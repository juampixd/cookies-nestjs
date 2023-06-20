import {
  Body,
  Controller,
  Get,
  Req,
  Res,
  Post,
  NotFoundException,
  BadRequestException,
  Delete,
  Inject,
  Param,
} from '@nestjs/common';
import { CookieCreateDTO } from 'src/dto/cookie.create.dto';
import { CookieService } from 'src/service/cookie/cookie.service';

@Controller('cookie')
export class CookieController {
  constructor(private cookieService: CookieService) {}

  @Get('/:cookie')
  getCookie(
    @Param('cookie') cookiename,
    @Req() req,
    @Res({ passthrough: true }) response,
  ) {
    this.cookieService.getCookieBySessionId(cookiename, req, response);
  }

  @Get()
  getAllCookies(@Req() req, @Res({ passthrough: true }) response) {
    this.cookieService.getAllCookies(req, response);
  }

  @Post()
  async createCookie(
    @Body() body: CookieCreateDTO,
    @Req() req,
    @Res({ passthrough: true }) response,
  ) {
    this.cookieService.createCookie(body, req, response);
  }

  @Delete('/:cookie')
  removeCookie(
    @Param('cookie') cookiename,
    @Req() req,
    @Res({ passthrough: true }) response,
  ) {
    this.cookieService.removeCookie(cookiename, req, response);
  }
}
