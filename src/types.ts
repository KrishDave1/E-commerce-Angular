import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface Options {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: 'body';
  params?:
    | HttpParams
    | {
        [param: string]: string | string[];
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}

export interface Products {
  items: Product[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

export interface Product {
  price: string;
  name: string;
  image: string;
  rating: number;
}

export interface PaginationParams {
  page: number;
  perPage: number;
}
