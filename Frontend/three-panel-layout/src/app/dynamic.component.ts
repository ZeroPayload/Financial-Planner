import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <p>Dynamic content for:</p>
      <strong>Left: {{ left }}</strong><br>
      <strong>Center: {{ center }}</strong>
      <div style="margin-top: 1em;">
        <!-- Render content based on left/center selection -->
        <ng-container [ngSwitch]="left + '-' + center">
          <div *ngSwitchCase="'Item 1-A'">Content for Item 1 - A</div>
          <div *ngSwitchCase="'Item 1-B'">Content for Item 1 - B</div>
          <div *ngSwitchCase="'Item 1-C'">Content for Item 1 - C</div>
          <div *ngSwitchCase="'Item 2-D'">Content for Item 2 - D</div>
          <div *ngSwitchCase="'Item 2-E'">Content for Item 2 - E</div>
          <div *ngSwitchCase="'Item 2-F'">Content for Item 2 - F</div>
          <div *ngSwitchCase="'Item 3-G'">Content for Item 3 - G</div>
          <div *ngSwitchCase="'Item 3-H'">Content for Item 3 - H</div>
          <div *ngSwitchCase="'Item 3-I'">Content for Item 3 - I</div>
          <div *ngSwitchDefault>Select a combination to see content.</div>
        </ng-container>
      </div>
    </div>
  `
})
export class DynamicComponent {
  @Input() left!: string;
  @Input() center!: string;
}
