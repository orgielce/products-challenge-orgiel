import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers, metaReducers, AuthEffects, ProductEffects} from "../shared";

@NgModule({
  imports: [
    EffectsModule.forRoot([AuthEffects, ProductEffects]),
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ]
})
export class NgRxModule {
}
