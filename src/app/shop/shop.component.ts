import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../Models/ProductDTO';
import { ShopService } from './shop.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from "./product-item/product-item.component";
import { BrandsDTO } from '../Models/Brands';
import { TypeDTO } from '../Models/Type';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NgFor, HttpClientModule, ProductItemComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {
   
  products:Iproduct[]=[];
  brands:BrandsDTO[]=[];
  types:TypeDTO[]=[];
  BrandId:number=0;
  TypeId:number=0;
  SortSelected:string ="name"
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

  getProducts =()=>{
    this.shopservice.getProducts(this.BrandId,this.TypeId, this.SortSelected).subscribe( response => {this.products = response.data},error => console.log("error"));
  }
  getBrands = () =>{
    this.shopservice.getBrands().subscribe(response => {this.brands = [{id:0, name:"ALL"},...response]},error => console.log("error"));
  }
  getTypes = () =>{
    this.shopservice.getTypes().subscribe(response => {this.types = [{id:0, name:"ALL"},...response]},error => console.log("error"));
  }
  onBrandSelected = (id:number) =>{
    this.BrandId = id;
    this.getProducts();
  }
    onTypeSelected = (id:number) =>{
    this.TypeId= id;
    this.getProducts();
  }

  onSortSelected = (sort:string) =>{
    this.SortSelected = sort;
    this.getProducts();
  }


}
