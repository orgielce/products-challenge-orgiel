import {Action, createReducer, on} from '@ngrx/store';
import {AuthState} from "../app.states";
import {AuthAction} from "../actions";

const currentUser = JSON.parse(localStorage.getItem('currentUser')!);

let initState: AuthState = {
  loggedIn: false,
  currentUser: currentUser,
  error: false,
};

if (currentUser) {
  initState = {
    loggedIn: true,
    currentUser,
    error: false,
  };
} else {
  initState = {loggedIn: false, currentUser: {user: '', name: '', access_token: ''}, error: false};
}

const reducer = createReducer(
    initState,
    on(
      AuthAction.Login, (state) => ({
        ...state, loading: true, error: false,
      })
    ),
    on(
      AuthAction.LoginComplete, (state, data) => ({
        ...state,
        currentUser: {
          name: data.data.name,
          user: data.data.user,
          access_token: data.data.access_token
        },
        loading: true,
        error: false,
      })
    ),
    on(
      AuthAction.LogoutComplete, (state, data) => ({
        ...state,
        currentUser: clearState(),
        loading: false,
        error: false,
      })
    ),
  )
;

export function authenticationReducer(
  state: AuthState | undefined,
  action: Action
) {
  return reducer(state, action);
}

function clearState() {
  return {
    name: '',
    user: '',
    access_token: ''
  }
}
