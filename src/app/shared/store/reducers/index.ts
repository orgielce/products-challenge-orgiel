import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {localStorageSync} from "ngrx-store-localstorage";

import {GlobalState} from "../app.states";
import {authenticationReducer} from "./auth.reducer";

export const reducers: ActionReducerMap<GlobalState> = {
  authentication: authenticationReducer,
};

export function localStorageSyncReducer(reducer: ActionReducer<GlobalState>): ActionReducer<GlobalState> {
  return localStorageSync({keys: [
      { authentication: ['loggedIn', 'currentUser', 'error']},
    ], rehydrate: true})(reducer);
}
export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
