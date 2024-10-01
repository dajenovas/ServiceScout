import { Component } from '@angular/core';

@Component({
  selector: 'app-service-main',
  templateUrl: './service-main.component.html',
  styleUrls: ['./service-main.component.scss']
})
export class ServiceMainComponent {
  // Variables for filter values
  priceValue: number = 1000;
  distanceValue: number = 5;

  // Method to apply filters
  applyFilters(): void {
    // Filter logic to handle backend calls or data filtering
    console.log('Filters applied');
    console.log('Price:', this.priceValue);
    console.log('Distance:', this.distanceValue);
  }

}
