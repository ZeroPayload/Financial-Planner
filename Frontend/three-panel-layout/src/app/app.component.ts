import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="panel left">
        <h3>Left Panel</h3>
        <ul>
          <li *ngFor="let item of leftItems" (click)="selectLeft(item)" [class.selected]="item === selectedLeft">{{ item }}</li>
        </ul>
      </div>
      <div class="panel center">
        <h3>Center Panel</h3>
        <ul *ngIf="selectedLeft">
          <li *ngFor="let item of centerItems[selectedLeft]" (click)="selectCenter(item)" [class.selected]="item === selectedCenter">{{ item }}</li>
        </ul>
        <div *ngIf="!selectedLeft">Select a left panel item</div>
      </div>
      <div class="panel right">
        <h3>Right Panel</h3>
        <ng-container *ngIf="selectedLeft && selectedCenter">
          <app-dynamic [left]="selectedLeft" [center]="selectedCenter"></app-dynamic>
        </ng-container>
        <div *ngIf="!selectedCenter">Select a center panel item</div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
