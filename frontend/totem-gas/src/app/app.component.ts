import { Component } from '@angular/core';

import { HeaderComponent }  from './header/header.component';
import { StatusComponent } from './status/status.component';
import { FuelFormComponent } from './fuel-form/fuel-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, StatusComponent, FuelFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'totem-gas';
}
