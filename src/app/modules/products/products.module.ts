import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {GalleryComponent, HeaderComponent, PaginatorComponent, TableComponent} from "../../components";

import {ProductsComponent} from './products.component';
import {ProductsRoutingModule} from "./products-routing.module";
import {TooltipModule} from "primeng/tooltip";

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
    GalleryComponent,
    TableComponent,
    TooltipModule
  ]
})
export class ProductsModule {
}
