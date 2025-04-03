import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

export interface Workout {
  id: number;
  type: string;
  duration: number;
  calories: number;
  goalAchieved: boolean;
  date: Date;
}

export interface Goal {
  id: number;
  type: string;
  targetValue: number;
  deadline: Date;
  achieved: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class WorkoutService {
  private workouts: Workout[] = [];
  private goals: Goal[] = [];

  private workoutsSubject = new BehaviorSubject<Workout[]>(this.workouts);
  private goalsSubject = new BehaviorSubject<Goal[]>(this.goals);

  workouts$ = this.workoutsSubject.asObservable();
  goals$ = this.goalsSubject.asObservable();

  addWorkout(workout : Workout) {
    this.workouts.push(workout);
    this.workoutsSubject.next(this.workouts);
  }

  addGoal(goal : Goal) {
    this.goals.push(goal);
    this.goalsSubject.next(this.goals);
  }

  constructor() { }
  getWorkouts(){
    return this.workouts;
  }
  getGoals() {
    return this.goals;
  }
}
