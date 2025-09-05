import { Routes } from '@angular/router';
import { ShellComponent } from './layout/shell/shell.component';

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
