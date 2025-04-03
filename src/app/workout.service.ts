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
    this.saveWorkouts();
  }

  removeGoal(goalId: number){
    this.goals = this.goals.filter(goal => goal.id !== goalId);
    this.goalsSubject.next(this.goals);
    this.saveGoals();
  }

  addGoal(goal : Goal) {
    const index = this.goals.findIndex(g => g.id === goal.id);
    if (index > -1){
      this.goals[index] = goal; //update existing goal
    } else {
      this.goals.push(goal); //add new goal
    }
    this.goalsSubject.next(this.goals);
    this.saveGoals();
  }

  constructor() {
    this.loadWorkouts();
    this.loadGoals();
  }

  getWorkouts(){
    return this.workouts;
  }
  getGoals() {
    return this.goals;
  }

  private loadWorkouts() {
    const storedWorkouts = localStorage.getItem('workouts');
    if (storedWorkouts) {
      this.workouts = JSON.parse(storedWorkouts);
      this.workoutsSubject.next(this.workouts);
    }
  }

  private loadGoals() {
    const storedGoals = localStorage.getItem('goals');
    if (storedGoals) {
      this.goals = JSON.parse(storedGoals);
      this.goalsSubject.next(this.goals);
    }
  }

  private saveWorkouts() {
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
  }

  private saveGoals() {
    localStorage.setItem('goals', JSON.stringify(this.goals));
  }
}
