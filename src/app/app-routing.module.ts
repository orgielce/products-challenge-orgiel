import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ROUTES_PATH} from "./shared";
import {PageNotFoundComponent} from "./components";

const routes: Routes = [
  {
    path: ROUTES_PATH.Base,
    loadChildren: () => import('./modules').then(m => m.LayoutModule)
  }, {
    path: ROUTES_PATH.Login,
    loadChildren: () => import('./modules').then(m => m.AuthModule)
  }, {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
