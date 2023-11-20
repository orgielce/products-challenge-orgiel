import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {KeyInterceptor} from "./shared";

import {NgRxModule} from "./modules/store.module";

import {NgxSpinnerModule} from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSpinnerModule,
    // ngrx
    NgRxModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: KeyInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
