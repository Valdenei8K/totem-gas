import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FuelRecord {
  timestamp: Date;
  operator: string;
  plate: string;
  liters: number;
  amount: number;
}

@Component({
  selector: 'app-recent-fuels',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-fuels.component.html',
  styleUrls: ['./recent-fuels.component.scss']
})
export class RecentFuelsComponent {
  fuelRecords: FuelRecord[] = [
    {
      timestamp: new Date(),
      operator: 'John Smith',
      plate: 'ABC-1D23',
      liters: 32.5,
      amount: 217.43
    },
    {
      timestamp: new Date(Date.now() - 1000 * 60 * 20),
      operator: 'Mary Johnson',
      plate: 'XYZ-9F87',
      liters: 40,
      amount: 267.6
    },
    {
      timestamp: new Date(Date.now() - 1000 * 60 * 45),
      operator: 'Carlos Lima',
      plate: 'DEF-3G45',
      liters: 25,
      amount: 167.25
    },
    {
      timestamp: new Date(Date.now() - 1000 * 60 * 90),
      operator: 'Ana Paula',
      plate: 'GHI-2J67',
      liters: 50,
      amount: 335
    },
    {
      timestamp: new Date(Date.now() - 1000 * 60 * 120),
      operator: 'Luiz Fernando',
      plate: 'JKL-8M90',
      liters: 20,
      amount: 134
    }
  ];
}
