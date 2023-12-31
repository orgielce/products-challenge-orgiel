import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, ofType, createEffect} from '@ngrx/effects';
import {catchError, exhaustMap, map, tap} from 'rxjs/operators';
import {of} from "rxjs";

import {AuthService} from "../../services";
import {NgxSpinnerService} from "ngx-spinner";
import {ROUTES_PATH} from "../../enums/routes";

import {AuthAction} from "../actions";

@Injectable({providedIn: 'root'})
export class AuthEffects {

  login$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(AuthAction.Login),
      tap((action) => this.spinner.show()),
      exhaustMap(action =>
        this.authService.login(action.credentials).pipe(
          map(data => {
            this.spinner.hide();
            this.router.navigate(["/" + ROUTES_PATH.Products]).then();
            return AuthAction.LoginComplete({data})
          }),
          catchError(error => {
            this.spinner.hide();
            return of(AuthAction.FinishState({error}))
          })
        )
      )
    )
  );

  logout$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(AuthAction.Logout),
      tap((action) => this.spinner.show()),
      exhaustMap(action =>
        this.authService.logOut().pipe(
          map(data => {
            this.spinner.hide();
            this.router.navigate(["/" + ROUTES_PATH.Base]).then();
            return AuthAction.LogoutComplete();
          }),
          catchError(error => {
            this.spinner.hide();
            return of(AuthAction.FinishState({error}))
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    public router: Router,
  ) {
  }
}
