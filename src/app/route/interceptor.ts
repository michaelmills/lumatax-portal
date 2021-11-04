import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.rewrite(req));
  }

  rewrite(req: HttpRequest<any>): HttpRequest<any> {
    const baseUrl = environment.server_base_url;

    let rewrittenReq = req;

    if (!req.url.startsWith('http')) {
      rewrittenReq = req.clone({
        url: `${baseUrl}${req.url}`,
      });
    }

    return rewrittenReq;
  }
}
