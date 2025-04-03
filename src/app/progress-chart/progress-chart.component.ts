import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-progress-chart',
  imports: [],
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

  loadChartData() {
    //data !!!!!!!!!!
  }
}
