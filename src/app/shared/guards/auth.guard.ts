import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import {AuthService} from "../services";
import {GlobalState} from "../store";
import {Store} from "@ngrx/store";
import {CurrentUser} from "../models";
import {ROUTES_PATH} from "../enums/routes";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  private access_token!: CurrentUser['access_token'];

  constructor(private router: Router,
              private authService: AuthService,
              private store: Store<GlobalState>,) {
    this.store.select((store) => store.authentication.currentUser)
      .subscribe(st => {
        try {
          if (st && st.access_token) {
            this.access_token = st?.access_token;
          }
        } catch (e) {
          throw e;
        }
      });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (!this.access_token) {
      this.router.navigate(["/" + ROUTES_PATH.Login]).then();
      return false;
    }
    return true;

  }
}
