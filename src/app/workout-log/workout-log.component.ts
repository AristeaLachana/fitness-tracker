import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WorkoutService, Workout } from '../workout.service';

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

  constructor(private workoutService: WorkoutService){
    this.loadWorkouts();
  }

  logWorkout() {
    if (this.workoutType && this.duration && this.calories && this.date){
      const newWorkout: Workout = {
        id: Math.random(),
        type: this.workoutType,
        duration: this.duration,
        calories: this.calories,
        date: this.date,
        goalAchieved: false
      };
      this.workoutService.addWorkout(newWorkout);
      this.workoutSaved = true;
      this.resetForm();
      this.loadWorkouts();
    }
  }

  loadWorkouts() {
    this.workoutService.workouts$.subscribe(workouts => {
      this.workouts = workouts;
    })
  }

  resetForm() {
    this.workoutType = '',
    this.duration = null,
    this.calories = null,
    this.date = null;
  }
}
