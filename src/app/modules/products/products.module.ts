import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderComponent} from "../../components";
import {ProductsComponent} from './products.component';
import {ProductsRoutingModule} from "./products-routing.module";

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    ProductsRoutingModule
  ]
})
export class ProductsModule {
}
