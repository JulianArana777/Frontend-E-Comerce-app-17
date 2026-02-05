import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../Models/ProductDTO';
import { ShopService } from './shop.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from "./product-item/product-item.component";
import { BrandsDTO } from '../Models/Brands';
import { TypeDTO } from '../Models/Type';
import { ThisReceiver } from '@angular/compiler';
import { ShopParams } from '../Models/ShopParams';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NgFor, HttpClientModule, ProductItemComponent, PaginationModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {
  totalCount: number = 0 
  ShopParams=new ShopParams
  products:Iproduct[]=[];
  brands:BrandsDTO[]=[];
  types:TypeDTO[]=[];  
  SortOptions =[
    {name:"Alphabetical", value: "name"},
    {name:"Price: Low to High", value: "priceAsc"},
    {name:"Price: High to Low", value: "priceDesc"}
  ]
  
  constructor(private shopservice:ShopService){

  }

  ngOnInit() {
    
    this.getProducts();
    this.getBrands();
    this.getTypes();
    
    
    
  }

 getProducts = () => {
  this.shopservice.getProducts(this.ShopParams)
    .subscribe(response => {
      console.log('Backend response:', response);

      this.products = response.data;
      this.totalCount = response.count;

      
    });
};
  getBrands = () =>{
    this.shopservice.getBrands().subscribe(response => {this.brands = [{id:0, name:"ALL"},...response]},error => console.log("error"));
  }
  getTypes = () =>{
    this.shopservice.getTypes().subscribe(response => {this.types = [{id:0, name:"ALL"},...response]},error => console.log("error"));
  }
  onBrandSelected = (id:number) =>{
    this.ShopParams.brand = id;
    this.getProducts();
  }
    onTypeSelected = (id:number) =>{
    this.ShopParams.type= id;
    this.getProducts();
  }

  onSortSelected = (sort:string) =>{
    this.ShopParams.sort = sort;
    this.getProducts();
  }
  onPageChange = (Event:any) =>{
    this.ShopParams.PageNumber = Event.page;
    this.getProducts();
  }


}
