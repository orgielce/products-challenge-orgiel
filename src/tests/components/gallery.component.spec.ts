import {ComponentFixture, TestBed} from '@angular/core/testing';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {ProductsService} from "../../app/shared";
import {HttpClientModule} from "@angular/common/http";

import {provideMockStore} from "@ngrx/store/testing";
import {StoreModule} from "@ngrx/store";

import {GalleryComponent} from "../../app/components";

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, HttpClientModule, StoreModule],
      providers: [ProductsService, provideMockStore({})]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
