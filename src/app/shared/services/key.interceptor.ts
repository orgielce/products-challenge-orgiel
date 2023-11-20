import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Router} from "@angular/router";

import {Store} from "@ngrx/store";
import {Actions} from "@ngrx/effects";
import {GlobalState} from "../store";

import {NgxSpinnerService} from "ngx-spinner";

import {AuthService} from "./auth.service";
import {CurrentUser} from "../models";
import {catchError} from "rxjs/operators";

@Injectable()
export class KeyInterceptor implements HttpInterceptor {

  private access_token = '';
  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store<GlobalState>,
    private spinner: NgxSpinnerService,
    private actions$: Actions
  ) {
    this.store.select((store: GlobalState) => store.authentication.currentUser)
      .subscribe((st: CurrentUser) => {
        if (st && st.access_token) {
          this.access_token = st?.access_token;
        }
      });
  }

  // Intercept all http calls and add key param
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const cloneReq = request.clone({
      params: request.params.set( 'key', this.access_token ),
    });

    const req = this.access_token ? cloneReq : request;

    return next.handle(req).pipe(
      // @ts-ignore
      catchError(error => {
        if (error.name === "TimeoutError") {
          const messAlert = 'CONNECTION_TIMED_OUT';
          return throwError(error);
        } else if (error instanceof HttpErrorResponse) {
          const httpErrorCode = error.status;
          let messAlert = error.error.message
            ? error.error.message.toUpperCase()
            : 'SERVICE_NOT_AVAILABLE';
          switch (httpErrorCode) {
            case 0:
            case 400:
            case 403:
            case 404:
              if (error.error.errors) {
                messAlert = this.convertErrorsToString(error.error.errors);
              }
              break;
            case 405:
            case 409:
            case 412:

              break;
            case 422:
            case 500:

              break;
            case 503:
              messAlert = 'SERVICE_NOT_AVAILABLE';
              break;
            case 401:
              if (error.error.message === "The key token is invalid.") {
                //Emitir la accion de finalizar session
                // this.store.dispatch(AuthAction.LogoutComplete());
              }
              return req;
              break;
          }

          this.spinner.hide();
        }

        return throwError(error);
      })
    );
  }

  // Convert Errors Array to a Single String with <br> at the end
  convertErrorsToString(errors: any) {
    let newError = "";
    for (const key in errors) {
      if (Object.prototype.hasOwnProperty.call(errors, key)) {
        newError += errors[key] + "<br>";
      }
    }
    return newError.substring(0, newError.length - 4).toUpperCase();
  }
}
