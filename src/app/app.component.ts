import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavBarComponent } from "./core/nav-bar/nav-bar.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ShopComponent } from "./shop/shop.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModalModule, NavBarComponent, HttpClientModule, CommonModule, ShopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Client';
  
  constructor(){}
  ngOnInit(): void {
  }
  
}
