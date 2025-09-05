import { Routes } from '@angular/router';
import { ShellComponent } from './layout/shell/shell.component';

// TODO: Add smart task route
export const routes: Routes = [
	{
		path: '',
		component: ShellComponent,
		children: [
			{
				path: '',
				loadComponent: () => import('./shared/components/placeholder.component').then(m => m.PlaceholderComponent)
			}
		]
	}
];
