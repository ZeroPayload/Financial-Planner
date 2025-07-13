import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-center-panel',
  templateUrl: './center-panel.component.html',
  styleUrls: ['./center-panel.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CenterPanelComponent {
  @Input() left: string | null = null;
  @Output() optionSelected = new EventEmitter<string>();
  selected: string | null = null;
  inputOptions = ['Basic', 'Income', 'Expense', 'Investments', 'Life Events'];
  dashboardOptions = ['Projected Growth', 'F.I.R.E Goals'];

  select(option: string) {
    this.selected = option;
    this.optionSelected.emit(option);
    localStorage.setItem('centerPanelSelected', option);
  }

  ngOnInit() {
    this.selected = localStorage.getItem('centerPanelSelected');
  }
}
