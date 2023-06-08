import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    let ok: string;
    return next
      .handle(request)
      .pipe(
        tap(
          (event: HttpEvent<any>) => ok = event instanceof HttpResponse ? 'succeeded' : '',
          (error: HttpErrorResponse) => ok = 'failed'
        ),
        // Log when response observable either completes or errors
        finalize(() => {
          const elapsed = Date.now() - started;
          const msg = `${request.method}: ${request.urlWithParams} ${ok} in ${elapsed} ms.`;
          console.log('*********' + msg + '*****');
        })

      );
  }
}
