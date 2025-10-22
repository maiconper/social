import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';   // ✅ importa aqui
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-posts',
  standalone: true, // ✅ standalone component
  imports: [CommonModule, FormsModule], // ✅ adiciona FormsModule aqui
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: Post[] = [];
  form = { title: '', content: '' };
  editingId: number | null = null;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.posts = this.postService.getAll();
  }

  savePost() {
    if (this.editingId) {
      this.postService.update(this.editingId, this.form);
      this.editingId = null;
    } else {
      this.postService.add(this.form);
    }
    this.form = { title: '', content: '' };
    this.loadPosts();
  }

  editPost(post: Post) {
    this.form = { title: post.title, content: post.content };
    this.editingId = post.id;
  }

  deletePost(id: number) {
    this.postService.delete(id);
    this.loadPosts();
  }
}
