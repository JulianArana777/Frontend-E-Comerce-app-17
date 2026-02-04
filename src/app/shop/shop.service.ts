import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ipagination } from '../Models/Ipagination';
import { BrandsDTO } from '../Models/Brands';
import { TypeDTO } from '../Models/Type';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = "http://localhost:5079/api/";
  constructor(private http: HttpClient) {

  }

  getProducts = (brand?: number, type?: number) => {

    let params = new HttpParams();
    if (brand) {
      params = params.append("brand", brand.toString())
    }
    if (type) {
      params = params.append("type", type.toString())
    }
    return this.http.get<Ipagination>(
      this.baseUrl + 'product',
      {
        observe: 'response',
        params: params
      }
    ).pipe(
      map(response => response.body!)
    );

  }
  getBrands = () => {
    return this.http.get<BrandsDTO[]>(this.baseUrl + "product/brand")
  }
  getTypes = () => {
    return this.http.get<TypeDTO[]>(this.baseUrl + "product/type")
  }

  
}
