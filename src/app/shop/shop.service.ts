import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ipagination } from '../Models/Ipagination';
import { BrandsDTO } from '../Models/Brands';
import { TypeDTO } from '../Models/Type';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = "http://localhost:5079/api/";
  constructor(private http:HttpClient) {    
  
  }

  getProducts = () => {
    return this.http.get<Ipagination>(this.baseUrl + 'product?PageSize=50');
  }
  getBrands =() =>{
    return this.http.get<BrandsDTO[]>(this.baseUrl+"product/brand")
  }
  getTypes =() =>{
    return this.http.get<TypeDTO[]>(this.baseUrl+"product/type")
  }
}
