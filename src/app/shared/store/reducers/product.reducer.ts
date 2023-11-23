import {Action, createReducer, on} from '@ngrx/store';
import {ProductState} from "../app.states";
import {AuthAction, ProductAction} from "../actions";
import {ProductsDefaultFilterParams} from "../../filters";

const initState: ProductState = {
  loading: false,
  error: false,
  products: [],
  searchParams: ProductsDefaultFilterParams,
};

const reducer = createReducer(
    initState,
    on(
      ProductAction.GetProducts, (state) => ({
        ...state, loading: true, error: false,
      })
    ),
    on(
      ProductAction.GetProductsFiled, (state) => ({
        ...state, loading: false, error: true, products: []
      })
    ),
    on(
      ProductAction.GetProductsComplete, (state, p) => ({
        ...state,
        loading: false,
        error: false,
        products: p.products
      })
    ),
    on(
      ProductAction.UpdateProductsParams,
      (state, t) => ({
        ...state, searchParams: { ...state.searchParams, ...t.params },
      })
    ),
  )
;

export function productReducer(
  state: ProductState | undefined,
  action: Action
) {
  return reducer(state, action);
}
