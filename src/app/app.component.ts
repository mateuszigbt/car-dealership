import { Component, OnInit } from '@angular/core';
import { Product } from "../domain/product";
import { ProductService } from "../service/productservice";
import { ImportModules } from "./imports";
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './pages/main/main.component';
import { OffersComponent } from './pages/offers/offers.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';

interface City {
  name: string;
  code: string;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ImportModules, NavbarComponent, MainComponent, OffersComponent, LoginRegisterComponent],
  providers: [ProductService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {}
