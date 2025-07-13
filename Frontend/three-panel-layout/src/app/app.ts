import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { CenterPanelComponent } from './center-panel/center-panel.component';
import { BasicInputComponent } from './basic-input/basic-input.component';
import { IncomeInputComponent } from './income-input/income-input.component';
import { ExpenseInputComponent } from './expense-input/expense-input.component';
import { InvestmentsInputComponent } from './investments-input/investments-input.component';
import { LifeEventsInputComponent } from './life-events-input/life-events-input.component';
import { ProjectedGrowthComponent } from './projected-growth/projected-growth.component';
import { FireGoalsComponent } from './fire-goals/fire-goals.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LeftPanelComponent,
    CenterPanelComponent,
    BasicInputComponent,
    IncomeInputComponent,
    ExpenseInputComponent,
    InvestmentsInputComponent,
    LifeEventsInputComponent,
    ProjectedGrowthComponent,
    FireGoalsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class App {
  selectedLeft: string | null = localStorage.getItem('leftPanelSelected') || 'Input';
  selectedCenter: string | null = localStorage.getItem('centerPanelSelected') || null;

  onLeftSelected(option: string) {
    this.selectedLeft = option;
    this.selectedCenter = null;
    localStorage.setItem('leftPanelSelected', option);
  }

  onCenterSelected(option: string) {
    this.selectedCenter = option;
    localStorage.setItem('centerPanelSelected', option);
  }
}
