import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicInterceptor } from './basic.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: BasicInterceptor, multi: true }
];
