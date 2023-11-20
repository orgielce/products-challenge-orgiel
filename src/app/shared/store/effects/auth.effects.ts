import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, ofType, createEffect} from '@ngrx/effects';
import {catchError, exhaustMap, map, tap} from 'rxjs/operators';
import {of} from "rxjs";

import {AuthService} from "../../services";
import {NgxSpinnerService} from "ngx-spinner";
import {ROUTES_PATH} from "../../enums/routes";

import {Store} from "@ngrx/store";
import {AuthAction} from "../actions";
import {GlobalState} from "../app.states";

@Injectable({providedIn: 'root'})
export class AuthEffects {

  login$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(AuthAction.Login),
      // tap((action) => this.spinner.show()),
      exhaustMap((action: any) =>
        this.authService.login(action.credentials).pipe(
          map(data => {
            // this.spinner.hide();
            this.router.navigate(["/" + ROUTES_PATH.Products]).then();
            return AuthAction.LoginComplete({data})
          }),
          catchError(error => {
            // this.spinner.hide();
            return of(AuthAction.FinishState({error}))
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    // private spinner: NgxSpinnerService,
    private store: Store<GlobalState>,
    public router: Router,
  ) {
  }
}
