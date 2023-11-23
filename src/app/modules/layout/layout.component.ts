import {Component} from '@angular/core';

import {Product, ProductsService} from "../../shared";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  products!: Product[];
  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(private productsService: ProductsService) {
    productsService.getMockProducts()
      .then(prodducts => this.products = prodducts);
  }
}
