import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ipagination } from '../Models/Ipagination';
import { BrandsDTO } from '../Models/Brands';
import { TypeDTO } from '../Models/Type';
import { map } from 'rxjs';
import { ShopParams } from '../Models/ShopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = "http://localhost:5079/api/";
  constructor(private http: HttpClient) {

  }

  getProducts = (shopparams:ShopParams) => {

    let params = new HttpParams();
    if (shopparams.brand) {
      params = params.append("brand", shopparams.brand.toString())
    }
    if (shopparams.type) {
      params = params.append("type", shopparams.type.toString())
    }
    if(shopparams.sort){
      params = params.append("sort",shopparams.sort);
    }
    params = params.append("PageIndex",shopparams.PageNumber.toString());
    params=params.append("PageSize",shopparams.PageSize.toString());
    
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
