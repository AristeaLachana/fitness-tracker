import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Workout {
  id: number;
  type: string;
  duration: number;
  calories: number;
  goalAchieved: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workouts: Workout[] = [
    {id: 1, type: 'Running', duration: 30, calories: 300, goalAchieved: true},
    {id: 2, type: 'Cycling', duration: 45, calories: 400, goalAchieved: false},
    {id: 3, type: 'Swimming', duration: 30, calories: 250, goalAchieved: true}
  ];

  constructor() { }
  getWorkouts(): Observable<Workout[]> {
    return of(this.workouts);
  }
}
