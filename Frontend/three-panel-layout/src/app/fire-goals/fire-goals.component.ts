import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fire-goals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fire-goals.component.html',
  styleUrls: ['./fire-goals.component.css']
})
export class FireGoalsComponent {
  fireTypes = [
    { name: 'Coast Fire', description: 'Retire early with minimal lifestyle.' },
    { name: 'Lean Fire', description: 'Retire with a frugal lifestyle.' },
    { name: 'Fat Fire', description: 'Retire with a luxurious lifestyle.' }
  ];
}
