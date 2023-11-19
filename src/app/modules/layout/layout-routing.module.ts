import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LayoutComponent} from "./layout.component";

const layoutChildRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(layoutChildRoutes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
