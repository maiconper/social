import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from '../posts/posts.component'; // ✅ importa o CRUD

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, PostsComponent], // ✅ inclui o PostsComponent
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = {
    name: 'Maicon Pereira',
    bio: 'Desenvolvedor Angular e Java apaixonado por tecnologia.'
  };
}
