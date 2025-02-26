import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ProductService } from '../service/productservice';

@NgModule({
    imports: [
        RouterOutlet, 
        ButtonModule, 
        DropdownModule, 
        FormsModule, 
        ReactiveFormsModule, 
        CarouselModule, 
        TagModule,
    ],
    exports: [
        RouterOutlet, 
        ButtonModule, 
        DropdownModule, 
        FormsModule, 
        ReactiveFormsModule, 
        CarouselModule, 
        TagModule,
    ],
    providers: [ProductService]
})
export class ImportModules {}