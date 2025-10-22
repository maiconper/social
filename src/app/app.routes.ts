import { Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: 'profile', component: ProfileComponent }
];
