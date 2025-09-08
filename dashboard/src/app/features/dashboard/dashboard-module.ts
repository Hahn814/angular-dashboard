import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard.component').then(m => m.Dashboard)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)  // Empty routes as this is a feature module
  ],
})
export class DashboardModule { }
