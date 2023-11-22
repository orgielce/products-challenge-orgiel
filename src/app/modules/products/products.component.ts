import {Component, OnInit} from '@angular/core';
import {debounceTime, Observable} from "rxjs";

import {
  GlobalState,
  Product,
  ProductAction,
  ProductsDefaultFilterParams,
  ProductsFilteringParams,
  ViewType
} from "../../shared";
import {Store} from "@ngrx/store";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products!: Product[];
  products$!: Observable<Product[]>;
  searchParams$!: Observable<ProductsFilteringParams>;
  searchParams!: ProductsFilteringParams;
  views = ViewType;
  currentView: ViewType = this.views.gallery;
  controlGeneral = new FormControl();
  controlBarcode = new FormControl();
  controlMpn = new FormControl();
  controlBrand = new FormControl();
  controlCategory = new FormControl();

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
      this.store.dispatch(ProductAction.UpdateProductsParams({
          params: ProductsDefaultFilterParams
        })
      );
    }

    // filters
    this.controlGeneral.valueChanges
      .pipe(debounceTime(500))
      .subscribe(() => this.setParams());
    this.controlBarcode.valueChanges
      .pipe(debounceTime(500))
      .subscribe(() => this.filterParams());
    this.controlMpn.valueChanges
      .pipe(debounceTime(500))
      .subscribe(() => this.filterParams());
    this.controlBrand.valueChanges
      .pipe(debounceTime(500))
      .subscribe(() => this.filterParams());
  }

  setCurrentView = (current: ViewType) => this.currentView = current;

  setCurrentPage = (currentPage: number) => {
    this.store.dispatch(
      ProductAction.UpdateProductsParams({
        params: {
          page: currentPage.toString()
        },
      })
    );
  };

  setParams = (): void => {
    this.store.dispatch(
      ProductAction.UpdateProductsParams({
        params: {
          base: this.controlGeneral.value,
          page: this.searchParams.page
        },
      })
    );
  }

  filterParams = (): void => {
    this.store.dispatch(ProductAction.UpdateProductsParams({
        params: {
          base: '',
          page: this.searchParams.page,
          barcode: this.controlBarcode.value,
          mpn: this.controlMpn.value,
          brand: this.controlBrand.value,
          category: this.controlCategory.value === '-1' ? '' : this.controlCategory.value,
        },
      })
    );
  }

  clearParams = (): void => {
    this.controlGeneral.setValue('');
    this.controlBarcode.setValue('');
    this.controlMpn.setValue('');
    this.controlBrand.setValue('');
    this.controlCategory.setValue('-1');

    this.store.dispatch(ProductAction.UpdateProductsParams({
        params: ProductsDefaultFilterParams
      })
    );
  }
}
