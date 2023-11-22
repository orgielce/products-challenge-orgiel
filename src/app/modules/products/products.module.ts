import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {GalleryComponent, PaginatorComponent, TableComponent} from "../../components";

import {ProductsComponent} from './products.component';
import {ProductsRoutingModule} from "./products-routing.module";

import {TooltipModule} from "primeng/tooltip";

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    PaginatorComponent,
    GalleryComponent,
    TableComponent,
    TooltipModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule {
}
