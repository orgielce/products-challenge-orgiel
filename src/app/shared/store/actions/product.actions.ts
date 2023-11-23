import { createAction, props } from '@ngrx/store';
import {Product, ProductsFilteringParams} from "../../models";

export const GetProducts = createAction('[PRODUCT] Get Products');
export const GetProductsComplete = createAction('[PRODUCT] Get Products Complete', props<{ products: Product[] }>());
export const GetProductsFiled = createAction('[PRODUCT] Get Products Filed');
export const UpdateProductsParams = createAction(
  '[PRODUCT] Update Products Params',
  props<{ params: ProductsFilteringParams; }>()
);
