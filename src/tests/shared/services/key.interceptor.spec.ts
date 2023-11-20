import { TestBed } from '@angular/core/testing';

import { KeyInterceptor } from '../../../app/shared/services/key.interceptor';
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {provideMockStore} from "@ngrx/store/testing";
import {MessageService} from "primeng/api";

describe('KeyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      StoreModule.forRoot(provideMockStore),
    ],
    providers: [
      MessageService,
      KeyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: KeyInterceptor = TestBed.inject(KeyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
