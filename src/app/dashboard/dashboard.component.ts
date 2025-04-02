import { Component } from '@angular/core';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  totalWorkouts: number = 0;
  totalCalories: number = 0;
  goalsAchieved: number = 0;
  averageDuration: number = 0;

  constructor(private workoutService: WorkoutService){}

  ngOnInit() {
    this.workoutService.getWorkouts().subscribe(workouts => {
      this.totalWorkouts = workouts.length;
      this.totalCalories = workouts.reduce((sum, workout) => sum + workout.calories, 0);
      this.goalsAchieved = workouts.filter(workout => workout.goalAchieved).length;
      this.averageDuration = workouts.length ? workouts.reduce((sum, workout) => sum + workout.duration, 0) / workouts.length : 0;
    });
  }
}
