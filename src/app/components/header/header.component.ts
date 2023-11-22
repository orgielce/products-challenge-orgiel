import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthAction, AuthService, CurrentUser, GlobalState, ROUTES_PATH} from "../../shared";
import {RouterLink} from "@angular/router";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  customRoutes = ROUTES_PATH;
  user!: CurrentUser;

  constructor(private store: Store<GlobalState>, private authService: AuthService) {
    this.user = authService.currentUserValue;
  }

  isLogged = (): boolean => this.user?.access_token.length > 0
  setLogout = () => {
    this.store.dispatch(AuthAction.Logout());
  }
}
