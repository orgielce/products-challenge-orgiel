import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {KeyInterceptor} from "./shared";

import {NgxSpinnerModule} from "ngx-spinner";
import {MessageService} from "primeng/api";

import {NgRxModule} from "./modules";

import {GALLERY_CONFIG, GalleryConfig} from "ng-gallery";
import {HeaderComponent} from "./components";

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
        NgRxModule,
        HeaderComponent
    ],
  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: KeyInterceptor,
      multi: true
    },
    {
      provide: GALLERY_CONFIG,
      useValue: {
        autoHeight: true,
        imageSize: 'cover'
      } as GalleryConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
