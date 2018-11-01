import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class BasicInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('setting headers');
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Basic ZmlmYS11c2VyOlhqRWhlQmVyaDI=')
    });
    return next.handle(authReq);
  }

}
