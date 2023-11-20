import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from '../../app/modules/layout/layout.component';
import {HeaderComponent} from "../../app/components";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutComponent],
      imports: [HeaderComponent, HttpClientModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
