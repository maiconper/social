import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = [];
  private nextId = 1;

  constructor() {}

  getAll(): Post[] {
    return this.posts;
  }

  getById(id: number): Post | undefined {
    return this.posts.find(p => p.id === id);
  }

  add(post: Omit<Post, 'id'>): void {
    this.posts.push({ id: this.nextId++, ...post });
  }

  update(id: number, updatedPost: Omit<Post, 'id'>): void {
    const index = this.posts.findIndex(p => p.id === id);
    if (index > -1) {
      this.posts[index] = { id, ...updatedPost };
    }
  }

  delete(id: number): void {
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
