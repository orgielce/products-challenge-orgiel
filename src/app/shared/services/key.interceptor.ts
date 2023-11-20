import {Injectable} from '@angular/core';
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
import {AlertService} from "./alert.service";
import {AlertType} from "../enums";

import Swal from "sweetalert2";

@Injectable()
export class KeyInterceptor implements HttpInterceptor {

  private access_token = '';
  private alertType = AlertType;

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService,
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
      params: request.params.set('key', this.access_token),
    });

    const req = this.access_token ? cloneReq : request;

    return next.handle(req).pipe(
      // @ts-ignore
      catchError(error => {
        if (error.name === "TimeoutError") {
          const messAlert = 'CONNECTION_TIMED_OUT';
          Swal.fire({
            title: 'CONNECTION',
            text: messAlert,
            icon: 'error'
          }).then(() => {});
          this.alertService.show(
            this.alertType.Error,
            'CONNECTION',
            messAlert
          );
          return throwError(error);
        } else if (error instanceof HttpErrorResponse) {
          let messAlert = '';
          const httpErrorCode = error.status;
          switch (httpErrorCode) {
            case 0:
            case 400:
            case 403:
              messAlert = 'Invalid API key'.toUpperCase();
              Swal.fire({
                title: 'API key',
                text: messAlert,
                icon: 'error'
              }).then(() => console.log(777));
              break;
            case 404:
              messAlert = 'No data returned'.toUpperCase();
              this.alertService.show(
                this.alertType.Error,
                'Data',
                messAlert
              );
              break;
            case 405:
            case 409:
            case 412:
              this.alertService.show(
                this.alertType.Error,
                'Method request',
                error.statusText.toUpperCase()
              );
              break;
            case 422:
              this.alertService.show(
                this.alertType.Error,
                'Error',
                error.statusText.toUpperCase()
              );
              break;
            case 429:
              messAlert = 'Exceeded API call limits'.toUpperCase();
              this.alertService.show(
                this.alertType.Error,
                'Exceeded limit',
                messAlert
              );
              break;
            case 500:
            case 503:
              messAlert = 'SERVICE_NOT_AVAILABLE';
              this.alertService.show(
                this.alertType.Error,
                'SERVICE',
                messAlert
              );
              break;
            case 401:
              messAlert = 'The key token is invalid.'.toUpperCase();
              // finalizar session y ir a login
              // this.store.dispatch(AuthAction.LogoutComplete()
              // return req;
              this.alertService.show(
                this.alertType.Error,
                'Invalid key',
                messAlert
              );
              break;
          }

          this.spinner.hide();
        }

        return throwError(error);
      })
    );
  }
}
