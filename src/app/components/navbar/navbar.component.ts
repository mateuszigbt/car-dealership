import { Component } from '@angular/core';
import { ImportModules } from '../../imports';
import { ActiveOffersComponent } from '../active-offers/active-offers.component';
import { EndedOffersComponent } from '../ended-offers/ended-offers.component';
import { MessagesComponent } from '../messages/messages.component';
import { WatchedOffersComponent } from '../watched-offers/watched-offers.component';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ImportModules
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
