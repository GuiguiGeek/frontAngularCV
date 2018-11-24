import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SummaryComponent } from './summary/summary.component' ;
import { SkillsComponent } from './skills/skills.component' ;
import { TimelineComponent } from './timeline/timeline.component' ;

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'skill', component: SkillsComponent },
  { path: 'skills', component: SkillsComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
