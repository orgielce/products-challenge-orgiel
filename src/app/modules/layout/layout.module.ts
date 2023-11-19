import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {LayoutRoutingModule} from "./layout-routing.module";
import {HeaderComponent} from "../../components";


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    LayoutRoutingModule
  ]
})
export class LayoutModule {
}
