import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModalModule, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Client';
}
