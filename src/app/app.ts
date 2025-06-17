import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-proxy-example';
  posts: any[] = [];

  constructor(private http: HttpClient) {}

  fetchPosts() {
    this.http.get<any[]>('http://localhost:3000/posts').subscribe((data) => {
      this.posts = data;
    });
  }
}
