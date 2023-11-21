import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, ofType, createEffect} from '@ngrx/effects';
import {catchError, exhaustMap, map, tap} from 'rxjs/operators';
import {of} from "rxjs";

import {ProductsService} from "../../services";
import {NgxSpinnerService} from "ngx-spinner";

import {ProductAction} from "../actions";

@Injectable({providedIn: 'root'})
export class ProductEffects {

  fetchProducts$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(ProductAction.GetProducts),
      tap((action) => this.spinner.show()),
      exhaustMap(action =>
        this.productsService.getProducts().pipe(
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
    private actions$: Actions,
    private productsService: ProductsService,
    private spinner: NgxSpinnerService,
    public router: Router,
  ) {
  }
}
