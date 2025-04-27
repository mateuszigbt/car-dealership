import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FooterInfoComponent } from '../footer-info/footer-info.component';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-active-offers',
  standalone: true,
  imports: [FormsModule, InputTextModule, FloatLabelModule, ButtonModule, DropdownModule, FooterInfoComponent],
  templateUrl: './active-offers.component.html',
  styleUrl: './active-offers.component.scss',
})
export class ActiveOffersComponent implements OnInit {
  value: string | undefined;

  loading: boolean = false;

  cities: City[] | undefined;

  selectedCity: City | undefined;

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
