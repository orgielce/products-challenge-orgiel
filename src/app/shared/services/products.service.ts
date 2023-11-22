import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

import {environment} from "../../../environments/environment";
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
    if (filters.base) {
      query = `search=${filters.base}&formatted=y&page=${Number(filters.page) === 1 ? 1 : filters.page}`;
    } else {
      query = '';
      if (filters.mpn) {
        query += `mpn=${filters.mpn}`;
      }
      if (filters.asin) {
        query += `asin=${filters.asin}`;
      }
      if (filters.title) {
        query += `title=${filters.title}`;
      }
      if (filters.category) {
        query += `category=${filters.category}`;
      }
      if (filters.manufacturer) {
        query += `manufacturer=${filters.manufacturer}`;
      }
      if (filters.brand) {
        query += `brand=${filters.brand}`;
      }
      if (filters.barcode) {
        query += `barcode=${filters.barcode}`;
      }

      query += `&formatted=y&page=${Number(filters.page) === 1 ? 1 : filters.page}`;
    }

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
