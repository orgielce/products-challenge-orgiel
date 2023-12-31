import { ComponentFixture, TestBed } from '@angular/core/testing';

import {GalleryComponent} from "../../app/components";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";
import {provideMockStore} from "@ngrx/store/testing";
import {StoreModule} from "@ngrx/store";

import {LayoutComponent} from "../../app/modules";

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutComponent],
      imports: [GalleryComponent, HttpClientModule, RouterTestingModule, StoreModule],
      providers: [provideMockStore({})]
    });
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
