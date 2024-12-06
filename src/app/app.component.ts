import { Component, OnInit } from '@angular/core';
import { Product } from "../domain/product";
import { ProductService } from "../service/productservice";
import { ImportModules } from "./imports";

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ImportModules],
  providers: [ProductService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'car-dealership';

  cities: City[] | undefined;
  selectedCity: City | undefined;

  products: Product[] = [];
  responsiveOptions: any[] | undefined;

  constructor() { }

  ngOnInit() {
    

    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }
}
