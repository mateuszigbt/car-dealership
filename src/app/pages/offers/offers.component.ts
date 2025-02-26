import { Component, OnInit } from '@angular/core';
import { ImportModules } from '../../imports';
import { Product } from '../../../domain/product';
import { DropdownModule } from 'primeng/dropdown';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { FooterInfoComponent } from "../../components/footer-info/footer-info.component";

interface City {
  name: string;
  code: string;
}

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [ImportModules, DropdownModule, BreadcrumbModule, PaginatorModule, FooterInfoComponent],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss',
})
export class OffersComponent implements OnInit {
  title = 'car-dealership';

  cities: City[] | undefined;
  selectedCity: City | undefined;

  products: Product[] = [];
  responsiveOptions: any[] | undefined;

  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  first: number = 0;
  rows: number = 10;

  constructor() {}

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
}

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];

    this.items = [
      { label: 'Electronics' },
      { label: 'Computer' },
      { label: 'Accessories' },
      { label: 'Keyboard' },
      { label: 'Wireless' },
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
