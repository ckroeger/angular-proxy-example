import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';


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
    const targetUrl = environment.targetUrl;
    console.log('Fetching posts from:', targetUrl);
    this.http.get<any>(targetUrl ).subscribe({
      next: (data) => {
        console.log('Fetched posts:', data);
        this.posts = data; // <-- Zugriff auf das Array
      },
      error: (err) => {
        console.error('Error fetching posts:', err);
      }
    });
  }
}
