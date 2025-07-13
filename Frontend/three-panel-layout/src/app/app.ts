import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from './dynamic.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DynamicComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class App {
  leftItems = ['Item 1', 'Item 2', 'Item 3'];
  centerItems: { [key: string]: string[] } = {
    'Item 1': ['A', 'B', 'C'],
    'Item 2': ['D', 'E', 'F'],
    'Item 3': ['G', 'H', 'I']
  };
  selectedLeft: string | null = null;
  selectedCenter: string | null = null;

  selectLeft(item: string) {
    this.selectedLeft = item;
    this.selectedCenter = null;
  }

  selectCenter(item: string) {
    this.selectedCenter = item;
  }
}
