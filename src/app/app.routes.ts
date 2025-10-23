import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { PostsComponent } from './components/posts/posts.component';
import { WorkoutsComponent } from './components/workouts/workouts.component';
import { WorkoutDetailComponent } from './components/workout-detail/workout-detail.component';


export const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'workouts', component: WorkoutsComponent },
  { path: 'workouts/:id', component: WorkoutDetailComponent } // ✅ nova rota
];
