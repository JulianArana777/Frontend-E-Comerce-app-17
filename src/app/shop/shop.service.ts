import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = "http://localhost:5079/api/";
  constructor(private http:HttpClient) { 

    const getProducts = () =>{
      return this.http.get(this.baseUrl+"product");
    }
  }
}
