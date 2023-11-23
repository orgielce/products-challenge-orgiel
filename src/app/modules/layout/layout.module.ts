import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {LayoutRoutingModule} from "./layout-routing.module";
import {CardComponent, GalleryComponent} from "../../components";

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    GalleryComponent,
    CardComponent
  ]
})
export class LayoutModule {
}
