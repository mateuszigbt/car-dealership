import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, InputTextModule, ButtonModule, CheckboxModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  value: string | undefined;
  formGroup: FormGroup = new FormGroup({
    city: new FormControl<string | null>(null)
  })
}
