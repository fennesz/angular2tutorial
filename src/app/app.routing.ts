import { Routes, RouterModule } from '@angular/router';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventListComponent } from './events/events-list.component';
import { CreateEventComponent } from './events/createevent/createevent.component';
import {Error404Component} from './errors/404.component'
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { EventsListResolverService } from './events/events-list-resolver.service';

const routes: Routes = [
  { path: 'events', component:EventListComponent, resolve: {events:EventsListResolverService} },
  { path: 'events/new', component: CreateEventComponent,
  canDeactivate: [EventRouteActivatorService] }, // Has to be above :id, so it doesn't resolve as id
  { path: 'events/:id', component: EventDetailsComponent,
  canActivate: [EventRouteActivatorService] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module.ts#UserModule' }
];

export const AppRoutes = RouterModule.forRoot(routes);
