import { Component } from '@angular/core';
import { ActiveOffersComponent } from '../../components/active-offers/active-offers.component';
import { EndedOffersComponent } from '../../components/ended-offers/ended-offers.component';
import { MessagesComponent } from '../../components/messages/messages.component';
import { WatchedOffersComponent } from '../../components/watched-offers/watched-offers.component';
import { SettingsComponent } from '../../components/settings/settings.component';

@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [
    ActiveOffersComponent,
    EndedOffersComponent,
    MessagesComponent,
    WatchedOffersComponent,
    SettingsComponent,
    EndedOffersComponent
  ],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.scss',
})
export class MyAccountComponent {}
