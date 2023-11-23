import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GalleryComponent, PaginatorComponent, TableComponent} from "../../app/components";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";
import {provideMockStore} from "@ngrx/store/testing";
import {StoreModule} from "@ngrx/store";

import {ProductsComponent} from "../../app/modules";
import {CommonModule} from "@angular/common";
import {TooltipModule} from "primeng/tooltip";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [
        CommonModule,
        FormsModule, ReactiveFormsModule,
        PaginatorComponent,
        GalleryComponent,
        TableComponent,
        HttpClientModule,
        RouterTestingModule,
        StoreModule,
        TooltipModule
      ],
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
