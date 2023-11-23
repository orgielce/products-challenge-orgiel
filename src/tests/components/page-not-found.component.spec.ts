import { ComponentFixture, TestBed } from '@angular/core/testing';
import {PageNotFoundComponent} from "../../app/components";
import {HttpClientModule} from "@angular/common/http";
import {RouterLink} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNotFoundComponent],
      imports: [HttpClientModule, RouterTestingModule, RouterLink]
    });
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
