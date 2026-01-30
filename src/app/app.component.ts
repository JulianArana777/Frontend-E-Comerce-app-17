import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModalModule, NavBarComponent, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Client';
  products: any[] = [];
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get("http://localhost:5079/api/product?PageSize=50").subscribe( (response: any) => {
      this.products=response.data;
    }, error => {
      console.log(error);
    } );    
  }
  
}
