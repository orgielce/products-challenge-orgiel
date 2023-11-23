import { Component } from '@angular/core';
import {AuthService, CurrentUser, ROUTES_PATH} from "../../shared";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  customRoutes = ROUTES_PATH;
  user!: CurrentUser;

  constructor(private authService: AuthService) {
    this.user = authService.currentUserValue;
  }

  isLogged = (): boolean => this.user?.access_token.length > 0
}
