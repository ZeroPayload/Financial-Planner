import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface LifeEventEntry {
  name: string;
  type: string;
  frequency: string;
  age: number;
  start: number;
  end: number;
  eventType: 'income' | 'expense';
}

@Component({
  selector: 'app-life-events-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './life-events-input.component.html',
  styleUrls: ['./life-events-input.component.css']
})
export class LifeEventsInputComponent {
  entries: LifeEventEntry[] = [];
  newEntry: LifeEventEntry = { name: '', type: '', frequency: '', age: 0, start: 0, end: 0, eventType: 'income' };

  ngOnInit() {
    const saved = localStorage.getItem('lifeEventsInput');
    if (saved) this.entries = JSON.parse(saved);
  }

  addEntry() {
    if (this.newEntry.name && this.newEntry.type) {
      this.entries.push({ ...this.newEntry });
      this.newEntry = { name: '', type: '', frequency: '', age: 0, start: 0, end: 0, eventType: 'income' };
      this.save();
    }
  }

  removeEntry(i: number) {
    this.entries.splice(i, 1);
    this.save();
  }

  save() {
    localStorage.setItem('lifeEventsInput', JSON.stringify(this.entries));
  }
}
