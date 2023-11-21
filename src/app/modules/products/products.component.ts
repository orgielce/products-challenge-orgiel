import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";


import {GlobalState, Product, ProductAction, ProductsFilteringParams, ViewType} from "../../shared";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @ViewChild('generalSearch', {read: ElementRef}) generalSearch!: ElementRef;
  products!: Product[];
  products$!: Observable<Product[]>;
  searchParams$!: Observable<ProductsFilteringParams>;
  searchParams!: ProductsFilteringParams;
  views = ViewType;
  currentView: ViewType = this.views.gallery;

  constructor(private store: Store<GlobalState>) {
  }

  ngOnInit() {
    this.products$ = this.store.select((store) => store.products.products);
    this.products$.subscribe(p => {
      this.products = p;
    });

    this.searchParams$ = this.store.select((store) => store.products.searchParams);
    this.searchParams$.subscribe(params => this.searchParams = params);

    if (this.products && this.products.length === 0) {
      this.store.dispatch(ProductAction.GetProducts());
    }
  }

  setCurrentView = (current: ViewType) => this.currentView = current;

  setParams = (time: number = 1500): void => {
    if (this.generalSearch.nativeElement.value.length === 0) {
      return;
    }
    setTimeout(() => {
      this.store.dispatch(
        ProductAction.UpdateProductsParams({
          params: {
            base: this.generalSearch.nativeElement.value.toLowerCase(),
            page: this.searchParams.page
          },
        })
      );
    }, time);
  }
}
