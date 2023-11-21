import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

import {environment} from "../../../environments/environment";
import {Image, Poster, Product} from "../models";
import {API_PATH} from "../enums";
import {mockGallery, mockImages, mockProducts} from "../data";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return of(mockProducts);
    // return this.http.get<Observable<Product[]>>(
    //   `${API_PATH.Products}?brand=Nike&page=1`
    // ).pipe(map((data: any) =>  data.products));
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
}
