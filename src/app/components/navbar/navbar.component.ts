import { Component } from '@angular/core';
import { ImportModules } from '../../imports';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ImportModules],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
