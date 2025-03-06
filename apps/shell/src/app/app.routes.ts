import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'feature2',
    loadChildren: () =>
      import('feature2/Module').then((m) => m!.RemoteEntryModule),
  },
  {
    path: 'feature1',
    loadChildren: () =>
      import('feature1/Module').then((m) => m!.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
