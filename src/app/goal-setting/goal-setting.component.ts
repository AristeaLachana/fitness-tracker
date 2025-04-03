import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WorkoutService, Goal } from '../workout.service';

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

  constructor(private workoutService: WorkoutService) {
    this.loadGoals();
  }

  addGoal() {
    if (this.goalType && this.targetValue && this.deadline) {
      const newGoal: Goal = {
        id: this.goals.length + 1,
        type: this.goalType,
        targetValue: this.targetValue,
        deadline: this.deadline,
        achieved: false
      };
      this.workoutService.addGoal(newGoal);
      //this.goals.push(newGoal);
      //this.saveGoals();
      this.goalSaved = true;
      this.resetForm();
    }
  }

  loadGoals() {
    this.workoutService.goals$.subscribe(goals => {
      this.goals = goals;
    })
  }

  resetForm() {
    this.goalType = '';
    this.targetValue = null;
    this.deadline = null;
  }
}
