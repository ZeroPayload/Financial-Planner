import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ExpenseEntry {
  name: string;
  type: string;
  frequency: string;
  age: number;
  start: number;
  end: number;
  inflation: number;
}

@Component({
  selector: 'app-expense-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './expense-input.component.html',
  styleUrls: ['./expense-input.component.css']
})
export class ExpenseInputComponent {
  entries: ExpenseEntry[] = [];
  newEntry: ExpenseEntry = { name: '', type: '', frequency: '', age: 0, start: 0, end: 0, inflation: 0 };

  ngOnInit() {
    const saved = localStorage.getItem('expenseInput');
    if (saved) this.entries = JSON.parse(saved);
  }

  addEntry() {
    if (this.newEntry.name && this.newEntry.type) {
      this.entries.push({ ...this.newEntry });
      this.newEntry = { name: '', type: '', frequency: '', age: 0, start: 0, end: 0, inflation: 0 };
      this.save();
    }
  }

  removeEntry(i: number) {
    this.entries.splice(i, 1);
    this.save();
  }

  save() {
    localStorage.setItem('expenseInput', JSON.stringify(this.entries));
  }
}
