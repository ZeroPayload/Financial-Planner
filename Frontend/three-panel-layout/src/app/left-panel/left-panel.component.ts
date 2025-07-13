import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class LeftPanelComponent {
  options = ['Input', 'Dashboard'];
  selected: string | null = null;
  @Output() optionSelected = new EventEmitter<string>();

  select(option: string) {
    this.selected = option;
    this.optionSelected.emit(option);
    localStorage.setItem('leftPanelSelected', option);
  }

  ngOnInit() {
    this.selected = localStorage.getItem('leftPanelSelected');
  }
}
