import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './basic-input.component.html',
  styleUrls: ['./basic-input.component.css']
})
export class BasicInputComponent {
  model = { name: '', dob: '', email: '' };
  ngOnInit() {
    const saved = localStorage.getItem('basicInput');
    if (saved) this.model = JSON.parse(saved);
  }
  save() {
    localStorage.setItem('basicInput', JSON.stringify(this.model));
    alert('Saved!');
  }
}
