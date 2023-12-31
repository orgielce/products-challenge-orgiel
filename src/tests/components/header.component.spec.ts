import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HeaderComponent} from "../../app/components";

import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";
import {provideMockStore} from "@ngrx/store/testing";
import {StoreModule} from "@ngrx/store";

describe('HeaderComponent', () => {

  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, HttpClientModule, RouterTestingModule, StoreModule],
      providers: [provideMockStore({})]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should have dom elements', () => {
    fixture.detectChanges();
    const headerContainer = compiled.querySelector('.header-container');
    const logo = compiled.querySelector('img');

    expect( headerContainer ).toBeTruthy();
    expect( logo ).toBeTruthy();
  });
});
