import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LayoutComponent} from "./layout.component";
import {ROUTES_PATH} from "../../shared";

const layoutChildRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '', redirectTo: ROUTES_PATH.Index, pathMatch: 'full',
      }, {
        path: ROUTES_PATH.Index, component: LayoutComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(layoutChildRoutes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
