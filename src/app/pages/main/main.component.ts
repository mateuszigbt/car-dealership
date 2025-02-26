import { Component, OnInit } from '@angular/core';
import { ImportModules } from '../../imports';
import { Product } from '../../../domain/product';
import { FooterInfoComponent } from '../../components/footer-info/footer-info.component';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ImportModules, FooterInfoComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{
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
