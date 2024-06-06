import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/internal/Observable';
import { PaginationParams, Products } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private apiService: ApiService) {}

  private createHttpParams(params: PaginationParams): HttpParams {
    let httpParams = new HttpParams();
    Object.keys(params).forEach((key) => {
      const value = params[key];
      if (Array.isArray(value)) {
        value.forEach((val) => {
          httpParams = httpParams.append(key, val.toString());
        });
      } else {
        httpParams = httpParams.set(key, value.toString());
      }
    });
    return httpParams;
  }

  getProducts = (
    url: string,
    params: PaginationParams
  ): Observable<Products> => {
    const httpParams = this.createHttpParams(params);
    return this.apiService.get(url, {
      params : httpParams,
      responseType: 'json',
    });
  };
}
