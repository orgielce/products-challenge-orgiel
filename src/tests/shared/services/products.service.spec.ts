import { TestBed } from '@angular/core/testing';

import { ProductsService } from '../../../app/shared/services/products.service';
import {HttpClientModule} from "@angular/common/http";

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
