import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsComponent} from './products.component';
import {HeaderComponent} from "../../components";

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    HeaderComponent
  ]
})
export class ProductsModule {
}
