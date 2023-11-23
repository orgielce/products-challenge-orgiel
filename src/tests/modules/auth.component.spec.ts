import { ComponentFixture, TestBed } from '@angular/core/testing';

import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";
import {provideMockStore} from "@ngrx/store/testing";
import {StoreModule} from "@ngrx/store";

import {AuthComponent} from "../../app/modules";
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthComponent],
      imports: [FormsModule, ReactiveFormsModule, BrowserDynamicTestingModule, HttpClientModule, RouterTestingModule, StoreModule],
      providers: [provideMockStore({})]
    });
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
