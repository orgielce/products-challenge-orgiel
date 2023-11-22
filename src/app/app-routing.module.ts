import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard, ROUTES_PATH} from "./shared";
import {PageNotFoundComponent} from "./components";
import {AboutComponent} from "./components/about/about.component";
import {ChallengeComponent} from "./components/challenge/challenge.component";

const routes: Routes = [
  {
    path: ROUTES_PATH.Base,
    loadChildren: () => import('./modules').then(m => m.LayoutModule),
  }, {
    path: ROUTES_PATH.Login,
    loadChildren: () => import('./modules').then(m => m.AuthModule)
  }, {
    path: ROUTES_PATH.About, component: AboutComponent
  }, {
    path: ROUTES_PATH.Challenge, component: ChallengeComponent
  }, {
    path: ROUTES_PATH.Products,
    loadChildren: () => import('./modules').then(m => m.ProductsModule),
    canActivate: [AuthGuard],
  }, {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
