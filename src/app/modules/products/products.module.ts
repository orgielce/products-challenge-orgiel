import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderComponent} from "../../components";
import {ProductsComponent} from './products.component';
import {ProductsRoutingModule} from "./products-routing.module";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    ProductsRoutingModule,
    FormsModule,
    InputTextModule
  ]
})
export class ProductsModule {
}
