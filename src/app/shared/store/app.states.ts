import {
  CurrentUser
} from '../models';

export interface GlobalState {
  authentication: AuthState;
}

export interface AuthState {
  currentUser: CurrentUser;
  error: boolean;
  loggedIn: boolean;
}
