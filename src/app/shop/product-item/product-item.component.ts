import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../../Models/ProductDTO';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent implements OnInit{

@Input() product?: Iproduct;
  constructor(){
    

  }
  ngOnInit(){
    
  }

}
