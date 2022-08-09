import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { SnackBarService } from '../_services/snack-bar.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private snackBarService: SnackBarService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.snackBarService.open(err.message)
          return throwError(err);
        }),
      );
  }
}
