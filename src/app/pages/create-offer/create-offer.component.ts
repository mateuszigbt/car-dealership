import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { BadgeModule } from 'primeng/badge';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MessageService, PrimeNGConfig } from 'primeng/api';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-create-offer',
  standalone: true,
  imports: [
    ButtonModule,
    FormsModule,
    DropdownModule,
    RadioButtonModule,
    InputTextModule,
    FloatLabelModule,
    CalendarModule,
    FileUploadModule,
    BadgeModule,
    ProgressBarModule,
    ToastModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [MessageService],
  templateUrl: './create-offer.component.html',
  styleUrl: './create-offer.component.scss',
})
export class CreateOfferComponent implements OnInit {

  cities: City[] | undefined;
  selectedCity: City | undefined;

  ingredient!: string;

  value: string | undefined;

  date: Date | undefined;

  files: { name: string; size: number; objectURL?: string }[] = [];

  totalSize: number = 0;

  totalSizePercent: number = 0;
  

  constructor(
    private config: PrimeNGConfig,
    private messageService: MessageService
  ) {}



  ngOnInit() {
    this.cities = [
      { name: 'Osobowe', code: 'NY' },
      { name: 'Części', code: 'RM' },
      { name: 'Motocykle', code: 'LDN' },
      { name: 'Ciężarowe', code: 'IST' },
      { name: 'Rolnicze', code: 'PRS' },
      { name: 'Budowlane', code: 'PRSX' },
    ];
  }

  choose(event: any, callback: any) {
    callback();
  }

  onRemoveTemplatingFile(event: any, file: any, removeFileCallback: any, index: any) {
    removeFileCallback(event, index);
    this.totalSize -= parseInt(this.formatSize(file.size));
    this.totalSizePercent = this.totalSize / 10;
  }

  onClearTemplatingUpload(clear: any) {
    clear();
    this.totalSize = 0;
    this.totalSizePercent = 0;
  }

  onTemplatedUpload() {
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded',
      life: 3000,
    });
  }

  onSelectedFiles(event: any) {
    this.files = event.currentFiles as { name: string; size: number; objectURL?: string }[];
  
    this.totalSize = this.files.reduce((sum, file) => sum + file.size, 0);
    
    this.totalSizePercent = this.totalSize / 10;
  }
  

  uploadEvent(callback: any) {
    callback();
  }

  formatSize(bytes: any) {
    const k = 1024;
    const dm = 3;
    const sizes = this.config.translation?.fileSizeTypes;
  
    if (!sizes || sizes.length === 0) {
      return `${bytes} B`;
    }
  
    if (bytes === 0) {
      return `0 ${sizes[0]}`;
    }
  
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
  
    return `${formattedSize} ${sizes[i] || 'B'}`;
  }
}
