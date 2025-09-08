import { Routes } from '@angular/router';
import { ShellComponent } from './layout/shell/shell.component';

// TODO: Add smart task route
export const routes: Routes = [
	{
		path: 'dashboard',
		component: ShellComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('./features/dashboard/dashboard-module').then(m => m.DashboardModule)
			}
		]
	},
	{
		path: 'error/404',
		component: ShellComponent,
		children: [
			{
				// TODO: Create errors module and 404 component
				path: '',
				loadComponent: () => import('./shared/components/placeholder.component').then(m => m.PlaceholderComponent)
			}
		]
	},
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full'
		// Redirect to dashboard
	},
	{
		path: '**',
		redirectTo: 'error/404',
		pathMatch: 'full'
		// Redirect to 404 error page
	}
];
