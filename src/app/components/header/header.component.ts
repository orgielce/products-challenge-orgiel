import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthAction, CurrentUser, GlobalState, ROUTES_PATH} from "../../shared";
import {RouterLink} from "@angular/router";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  customRoutes = ROUTES_PATH;
  user$!: Observable<CurrentUser>;
  user!: CurrentUser;

  constructor(private store: Store<GlobalState>) {}

  ngOnInit() {
    this.user$ = this.store.select((store) => store.authentication.currentUser);
    this.user$.subscribe( user => this.user = user);
  }

  isLogged = (): boolean => this.user?.access_token.length > 0
  setLogout = () => {
    this.store.dispatch(AuthAction.Logout());
  }
}
