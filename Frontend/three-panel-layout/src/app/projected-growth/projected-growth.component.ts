import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projected-growth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projected-growth.component.html',
  styleUrls: ['./projected-growth.component.css']
})
export class ProjectedGrowthComponent {
  // Placeholder for table data logic
  years = Array.from({length: 100}, (_, i) => i + 1);
  // You can expand this with real calculations and event highlights
}
