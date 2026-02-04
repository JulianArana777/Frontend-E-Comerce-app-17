import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../Models/ProductDTO';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NgFor,],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {
   
  products:Iproduct[]=[];
  
  constructor(private shopservice:ShopService){

  }

  ngOnInit() {
    this.shopservice.getProducts().subscribe( response => {this.products = response.data},error => console.log("error"))
  }


}
