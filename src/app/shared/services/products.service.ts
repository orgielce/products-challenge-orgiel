import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

import {Image, Poster, Product, ProductsFilteringParams} from "../models";
import {API_PATH} from "../enums";
import {mockGallery, mockImages, mockProducts} from "../data";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  getProducts(filters: ProductsFilteringParams): Observable<Product[]> {
    // return of(mockProducts);

    let query = '';
    if (filters.base && (!filters.mpn && !filters.category && !filters.brand && !filters.barcode)) {
      query = `search=${filters.base}`;
    } else {
      query = '';

      if (filters.mpn) {
        query += query.length === 0 ? `mpn="${filters.mpn}"` : `&mpn="${filters.mpn}"`;
      }
      if (filters.category) {
        query += query.length === 0 ? `category=${filters.category}` : `&category=${filters.category}`;
      }
      if (filters.brand) {
        query += query.length === 0 ? `brand="${filters.brand}"` : `&brand="${filters.brand}"`;
      }
      if (filters.barcode) {
        query += query.length === 0 ? `barcode=${filters.barcode}` : `&barcode=${filters.barcode}`;
      }
    }

    query += `&formatted=y&page=${Number(filters.page) === 1 ? 1 : filters.page}`;

    return this.http.get<Observable<Product[]>>(
      `${API_PATH.Products}?${query}`
    ).pipe(map((data: any) => data.products));

  }

  getData(): Image[] {
    return mockImages;
  }

  getImages() {
    return Promise.resolve(this.getData());
  }

  getPosters(): Promise<Poster[]> {
    const posters = mockGallery;
    return Promise.resolve(posters);
  }

  getMockProducts(): Promise<Product[]> {
    const mock = mockProducts;
    return Promise.resolve(mock);
  }
}
