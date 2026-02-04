import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ipagination } from '../Models/Ipagination';

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
}
