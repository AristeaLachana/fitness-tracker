import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Goal {
  id: number;
  type: string;
  targetValue: number;
  deadline: Date;
  achieved: boolean;
}

@Component({
  selector: 'app-goal-setting',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './goal-setting.component.html',
  styleUrl: './goal-setting.component.css'
})
export class GoalSettingComponent {
  goals: Goal[] = [];
  goalType: string = '';
  targetValue: number | null = null;
  deadline: Date | null = null;
  goalSaved: boolean = false;

  addGoal() {
    if (this.goalType && this.targetValue && this.deadline) {
      const newGoal: Goal = {
        id: this.goals.length + 1,
        type: this.goalType,
        targetValue: this.targetValue,
        deadline: this.deadline,
        achieved: false
      };
      this.goals.push(newGoal);
      this.goalSaved = true;
      this.resetForm();
    }
  }

  resetForm() {
    this.goalType = '';
    this.targetValue = null;
    this.deadline = null;
  }
}
