import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Workout { 
  id: number;
  type: string;
  duration: number;
  calories: number;
  date: Date;
}

@Component({
  selector: 'app-workout-log',
  imports: [FormsModule, CommonModule],
  templateUrl: './workout-log.component.html',
  styleUrl: './workout-log.component.css'
})
export class WorkoutLogComponent {
  workouts: Workout[] = [];
  workoutType: string = '';
  duration: number | null = null;
  calories: number | null = null;
  date: Date | null = null;
  workoutSaved: boolean = false;

  logWorkout() {
    if (this.workoutType && this.duration && this.calories && this.date){
      const newWorkout: Workout = {
        id: this.workouts.length + 1,
        type: this.workoutType,
        duration: this.duration,
        calories: this.calories,
        date: this.date
      };
      this.workouts.push(newWorkout);
      this.workoutSaved = true;
      this.resetForm()
    }
  }

  resetForm() {
    this.workoutType = '',
    this.duration = null,
    this.calories = null,
    this.date = null;
  }
}
