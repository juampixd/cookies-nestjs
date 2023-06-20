import { Injectable, Req, Body } from '@nestjs/common';
import { CookieCreateDTO } from 'src/dto/cookie.create.dto';

@Injectable()
export class CookieService {
  createCookie(body: CookieCreateDTO, req, response) {
    const { sessionId, value } = body;
    const existCookie = this.existCookie(sessionId, req);
    if (!existCookie) {
      const expiryDate = new Date(Date.now() + 30000);
      return response
        .cookie(sessionId, value, { expires: expiryDate })
        .send('Se creo exitosamente');
    }
    return response.send('Este cookie ya existe');
  }

  removeCookie(cookiename, request, response) {
    const existCookie = this.existCookie(cookiename, request);
    if (existCookie) {
      return response.clearCookie(cookiename).send('Cookie eliminada');
    }
    return response.send('Cookie no existe actualmente');
  }

  getCookieBySessionId(cookiename, req, response) {
    const existCookie = this.existCookie(cookiename, req);
    if (existCookie) {
      const cookieValue = req.cookies[cookiename];
      return response
        .json(JSON.parse(`{ "${cookiename}": "${cookieValue}"}`))
        .send();
    }
    return response.send('Cookie no encontrado');
  }

  getAllCookies(req, response) {
    return response.json(req.cookies).send();
  }

  existCookie(cookie: string, request) {
    return cookie in request.cookies;
  }
}
