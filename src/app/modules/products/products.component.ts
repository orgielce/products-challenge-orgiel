import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";


import {GlobalState, Product, ProductAction, ProductsFilteringParams} from "../../shared";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products!: Product[];
  products$!: Observable<Product[]>;
  searchParams$!: Observable<ProductsFilteringParams>;

  constructor(private store: Store<GlobalState>) {
  }

  ngOnInit() {
    this.products$ = this.store.select((store) => store.products.products);
    this.products$.subscribe(p => this.products = p);
    this.searchParams$ = this.store.select(
      (store) => store.products.searchParams
    );

    if (this.products && this.products.length === 0) {
      this.store.dispatch(ProductAction.GetProducts());
    }
  }
}
