import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { PostsComponent } from './components/posts/posts.component';
import { WorkoutsComponent } from './components/workouts/workouts.component';
import { WorkoutDetailComponent } from './components/workout-detail/workout-detail.component';
import { HistoryComponent } from './components/history/history.component'; // ✅ novo import
import { BodyComponent } from './components/body/body.component'; // ✅ novo import




export const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'workouts', component: WorkoutsComponent },
  { path: 'workouts/:id', component: WorkoutDetailComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'body', component: BodyComponent } // ✅ nova rota
];
