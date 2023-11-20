import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

import {environment} from "../../../environments/environment";
import {Product} from "../models";
import {API_PATH} from "../enums";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Observable<Product[]>>(`${environment.barCodeApi}${API_PATH.Products}`)
      .pipe(map((data: any) => data.products));
  }
}
