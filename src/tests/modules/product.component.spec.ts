import { ComponentFixture, TestBed } from '@angular/core/testing';

import {GalleryComponent, PaginatorComponent} from "../../app/components";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";
import {provideMockStore} from "@ngrx/store/testing";
import {StoreModule} from "@ngrx/store";

import {ProductsComponent} from "../../app/modules";

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [GalleryComponent, PaginatorComponent, HttpClientModule, RouterTestingModule, StoreModule],
      providers: [provideMockStore({})]
    });
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
