import {
  CurrentUser, Product, ProductsFilteringParams
} from '../models';

export interface GlobalState {
  authentication: AuthState;
  products: ProductState;
}

export interface AuthState {
  currentUser: CurrentUser;
  error: boolean;
  loggedIn: boolean;
}

export interface ProductState {
  products: Product[];
  error: boolean;
  loading: boolean;
  searchParams: ProductsFilteringParams;
}
