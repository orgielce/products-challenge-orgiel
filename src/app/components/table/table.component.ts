import {Component, Input, OnInit} from '@angular/core';
import {NgClass, NgFor, NgIf} from "@angular/common";

import {TableModule} from "primeng/table";
import {TooltipModule} from "primeng/tooltip";

import {DefaultImage, GlobalState, Product, ProductAction, ProductsFilteringParams} from "../../shared";
import {MessagesModule} from "primeng/messages";

import {Message} from "primeng/api";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgIf, NgFor, TableModule, TooltipModule, NgClass, MessagesModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() products!: Product[];
  messages!: Message[];
  searchParams$!: Observable<ProductsFilteringParams>;
  searchParams!: ProductsFilteringParams;

  constructor(private store: Store<GlobalState>) {
  }

  ngOnInit() {
    this.searchParams$ = this.store.select((store) => store.products.searchParams);
    this.searchParams$.subscribe(params => this.searchParams = params);

    this.messages = [{ severity: 'error', summary: '', detail: 'No products loaded. Must by click here to reload' }];
  }

  trackByIndex = (index: number): number => {
    return index;
  };

  reloadProducts = (): void => {
    this.store.dispatch(ProductAction.UpdateProductsParams({params: this.searchParams}));
  };

  getPrice = (item: Product): string => {
    if (item && item.stores && item.stores.length && item.stores.length > 0) {
      const data = item.stores[0];
      return data ? `${data.currency} ${data.currency_symbol}${data.price}`: '0.00';
    }

    return '0.00';
  };

  loadDefaultImage(event: any): void {
    event.target.src = DefaultImage.product;
  }

}
