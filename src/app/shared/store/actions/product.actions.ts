import { createAction, props } from '@ngrx/store';
import {Product} from "../../models";

export const GetProducts = createAction('[PRODUCT] Get Products');
export const GetProductsComplete = createAction('[PRODUCT] Get Products Complete', props<{ products: Product[] }>());
export const GetProductsFiled = createAction('[PRODUCT] Get Products Filed');
