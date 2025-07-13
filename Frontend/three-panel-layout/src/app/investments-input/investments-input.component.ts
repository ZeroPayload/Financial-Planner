import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface InvestmentEntry {
  name: string;
  type: string;
  frequency: string;
  age: number;
  start: number;
  end: number;
  roi: number;
}

@Component({
  selector: 'app-investments-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './investments-input.component.html',
  styleUrls: ['./investments-input.component.css']
})
export class InvestmentsInputComponent {
  entries: InvestmentEntry[] = [];
  newEntry: InvestmentEntry = { name: '', type: '', frequency: '', age: 0, start: 0, end: 0, roi: 0 };

  ngOnInit() {
    const saved = localStorage.getItem('investmentsInput');
    if (saved) this.entries = JSON.parse(saved);
  }

  addEntry() {
    if (this.newEntry.name && this.newEntry.type) {
      this.entries.push({ ...this.newEntry });
      this.newEntry = { name: '', type: '', frequency: '', age: 0, start: 0, end: 0, roi: 0 };
      this.save();
    }
  }

  removeEntry(i: number) {
    this.entries.splice(i, 1);
    this.save();
  }

  save() {
    localStorage.setItem('investmentsInput', JSON.stringify(this.entries));
  }
}
