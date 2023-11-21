import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {GalleryComponent, HeaderComponent, PaginatorComponent} from "../../components";
import {ProductsComponent} from './products.component';
import {ProductsRoutingModule} from "./products-routing.module";

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    ProductsRoutingModule,
    FormsModule,
    PaginatorComponent,
    GalleryComponent
  ]
})
export class ProductsModule {
}
