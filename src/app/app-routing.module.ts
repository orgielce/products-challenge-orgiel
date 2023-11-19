import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ROUTES_PATH} from "./shared";
import {PageNotFoundComponent} from "./components";

const routes: Routes = [
  {
    path: '', redirectTo: ROUTES_PATH.Index, pathMatch: 'full'
  }, {
    path: ROUTES_PATH.Index,
    loadChildren: () => import('./modules').then(m => m.LayoutModule)
  }, {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
