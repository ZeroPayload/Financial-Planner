import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface IncomeEntry {
  type: string;
  amount: number;
}

@Component({
  selector: 'app-income-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './income-input.component.html',
  styleUrls: ['./income-input.component.css']
})
export class IncomeInputComponent {
  entries: IncomeEntry[] = [];
  newEntry: IncomeEntry = { type: '', amount: 0 };

  ngOnInit() {
    const saved = localStorage.getItem('incomeInput');
    if (saved) this.entries = JSON.parse(saved);
  }

  addEntry() {
    if (this.newEntry.type && this.newEntry.amount > 0) {
      this.entries.push({ ...this.newEntry });
      this.newEntry = { type: '', amount: 0 };
      this.save();
    }
  }

  removeEntry(i: number) {
    this.entries.splice(i, 1);
    this.save();
  }

  save() {
    localStorage.setItem('incomeInput', JSON.stringify(this.entries));
  }
}
