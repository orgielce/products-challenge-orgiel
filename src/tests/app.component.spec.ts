import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from '../app/app.component';
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {NgRxModule} from "../app/modules/store.module";


describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      BrowserModule,
      // BrowserAnimationsModule,
      HttpClientModule,
      NgRxModule
    ],
    declarations: [AppComponent]
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('should create the app', () => {
    expect(component).toBeTruthy();
  });

  test(`should have as title 'Challenge products by Orgiel'`, () => {
    expect(component.title).toEqual('Challenge products by Orgiel');
  });

  // test(`should found ngx-spinner'`, () => {
  //   const ngxSpinner = compiled.querySelector('ngx-spinner');
  //   expect( ngxSpinner ).toBeTruthy();
  // });

  test('should match with snapshot', () => {
    fixture.detectChanges();
    expect(compiled).toMatchSnapshot();
  });
});
