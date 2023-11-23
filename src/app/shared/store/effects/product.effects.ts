import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, ofType, createEffect} from '@ngrx/effects';
import {catchError, exhaustMap, map, tap, withLatestFrom} from 'rxjs/operators';
import {of} from "rxjs";

import {ProductsService} from "../../services";
import {NgxSpinnerService} from "ngx-spinner";

import {ProductAction} from "../actions";
import {Store} from "@ngrx/store";
import {GlobalState} from "../app.states";

@Injectable({providedIn: 'root'})
export class ProductEffects {

  fetchProducts$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(
        ProductAction.GetProducts, ProductAction.UpdateProductsParams
      ),
      tap((action) => this.spinner.show()),
      withLatestFrom(this.store.select((store) => store.products.searchParams)),
      exhaustMap(([action, searchParams]) =>
        this.productsService.getProducts(searchParams).pipe(
          map(products => {
            this.spinner.hide();
            return ProductAction.GetProductsComplete({products})
          }),
          catchError(error => {
            this.spinner.hide();
            return of(ProductAction.GetProductsFiled())
          })
        )
      )
    )
  );

  constructor(
    private store: Store<GlobalState>,
    private actions$: Actions,
    private productsService: ProductsService,
    private spinner: NgxSpinnerService,
    public router: Router,
  ) {
  }
}
