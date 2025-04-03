import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { WorkoutService, Workout } from '../workout.service';

@Component({
  selector: 'app-progress-chart',
  imports: [BaseChartDirective],
  standalone: true,
  templateUrl: './progress-chart.component.html',
  styleUrl: './progress-chart.component.css'
})
export class ProgressChartComponent implements OnInit {
  chartData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        label: 'Calories Burnt',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      }
    ]
  };

  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  ngOnInit() {
    this.loadChartData();
  }

  constructor(private workoutService: WorkoutService) {}

  loadChartData() {
    /*this.workoutService.getWorkouts().subscribe(workouts => {
      const groupedData = this.groupWorkoutsByMonth(workouts);
      this.chartData.labels = Object.keys(groupedData); //months
      this.chartData.datasets[0].data = Object.values(groupedData).map(w => w.reduce((sum, workout) => sum + workout.calories, 0)) //calories per month
    });*/
  }

  groupWorkoutsByMonth(workouts: Workout[]): { [key : string]: Workout[]} {
    return workouts.reduce((acc, workout) => {
      const month = new Date(workout.date).toLocaleString('default', { month: 'long'});
      if(!acc[month]){
        acc[month] = [];
      }
      acc[month].push(workout);
      return acc;
    }, {} as { [KeyboardEvent: string]: Workout[]});
  }
}
