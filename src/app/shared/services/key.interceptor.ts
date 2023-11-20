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
          let messAlert = error.statusText
            ? error.statusText.toUpperCase()
            : 'SERVICE_NOT_AVAILABLE';
          switch (httpErrorCode) {
            case 0:
            case 400:
            case 403:
                messAlert = 'Invalid API key'.toUpperCase();
              break;
            case 404:
              messAlert = 'No data returned'.toUpperCase();
              break;
            case 405:
            case 409:
            case 412:
              console.log(error.statusText.toUpperCase(), 900)
              break;
            case 422:
              console.log(error.statusText.toUpperCase(), 920)
              break;
            case 429:
              messAlert = 'Exceeded API call limits'.toUpperCase();
              break;
            case 500:
            case 503:
              messAlert = 'SERVICE_NOT_AVAILABLE';
              break;
            case 401:
              messAlert = 'The key token is invalid.'.toUpperCase();
              // finalizar session y ir a login
              // this.store.dispatch(AuthAction.LogoutComplete()
              // return req;
              break;
          }

          this.spinner.hide();
        }

        return throwError(error);
      })
    );
  }
}
