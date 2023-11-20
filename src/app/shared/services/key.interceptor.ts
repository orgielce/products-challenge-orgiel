import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HttpHeaders
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Router} from "@angular/router";

import {Store} from "@ngrx/store";
import {Actions} from "@ngrx/effects";
import {AuthAction, GlobalState} from "../store";

import {NgxSpinnerService} from "ngx-spinner";

import {AuthService} from "./auth.service";
import {CurrentUser} from "../models";
import {catchError} from "rxjs/operators";
// import {AlertService} from "./alert.service";
import {AlertType, ROUTES_PATH} from "../enums";

import Swal from "sweetalert2";

@Injectable()
export class KeyInterceptor implements HttpInterceptor {

  private access_token = '';
  private alertType = AlertType;

  constructor(
    private router: Router,
    private authService: AuthService,
    // private alertService: AlertService,
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

    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');

    const cloneReq = request.clone({
      headers,
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
                icon: 'error',
                confirmButtonText: 'Go to login'
              }).then(() => {
                this.store.dispatch(AuthAction.Logout());
                this.router.navigate(["/" + ROUTES_PATH.Login]).then();
              });
              break;
            case 404:
              messAlert = 'No data returned'.toUpperCase();
              Swal.fire({
                title: 'Data',
                text: messAlert,
                icon: 'error'
              }).then(() => console.log(404));
              break;
            case 405:
            case 409:
            case 412:
              Swal.fire({
                title: 'Method request',
                text: error.statusText.toUpperCase(),
                icon: 'error'
              }).then(() => console.log('Method request'));
              break;
            case 422:
              Swal.fire({
                title: 'Error',
                text: error.statusText.toUpperCase(),
                icon: 'error'
              }).then(() => console.log('Error 422'));
              break;
            case 429:
              messAlert = 'Exceeded API call limits'.toUpperCase();
              Swal.fire({
                title: 'Exceeded limit',
                text: messAlert,
                icon: 'error'
              }).then(() => console.log('Error 429'));
              break;
            case 500:
            case 503:
              messAlert = 'SERVICE_NOT_AVAILABLE';
              Swal.fire({
                title: 'SERVICE',
                text: messAlert,
                icon: 'error'
              }).then(() => console.log('Error SERVICE'));
              break;
            case 401:
              messAlert = 'The key token is invalid.'.toUpperCase();
              // finalizar session y ir a login
              Swal.fire({
                title: 'Invalid key',
                text: messAlert,
                icon: 'error'
              }).then(() => {
                this.store.dispatch(AuthAction.Logout());
                this.router.navigate(["/" + ROUTES_PATH.Login]).then();
              });
              break;
          }

          this.spinner.hide();
        }

        return throwError(error);
      })
    );
  }
}
