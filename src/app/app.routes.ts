import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoalSettingComponent } from './goal-setting/goal-setting.component';
import { ProgressChartComponent } from './progress-chart/progress-chart.component';
import { WorkoutLogComponent } from './workout-log/workout-log.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'goal-setting', component: GoalSettingComponent},
    {path: 'progress-chart', component: ProgressChartComponent},
    {path: 'workout-log', component: WorkoutLogComponent},
    {path: 'about', component: AboutComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}