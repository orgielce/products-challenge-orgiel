import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {localStorageSync} from "ngrx-store-localstorage";

import {GlobalState} from "../app.states";
import {authenticationReducer} from "./auth.reducer";
import {productReducer} from "./product.reducer";

export const reducers: ActionReducerMap<GlobalState> = {
  authentication: authenticationReducer,
  products: productReducer,
};

export function localStorageSyncReducer(reducer: ActionReducer<GlobalState>): ActionReducer<GlobalState> {
  return localStorageSync({keys: [
      { authentication: ['loggedIn', 'currentUser', 'error']},
      { products: ['products', 'loading', 'error']},
    ], rehydrate: true})(reducer);
}
export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
