import { LoginComponent } from './login.component';
import { ProfileComponent} from './profile.component';
import { Routes, RouterModule } from '@angular/router';

export const userRoutes: Routes = [
    { path: 'profile', component: ProfileComponent }, // /user/profile
    { path: 'login', component: LoginComponent }
];