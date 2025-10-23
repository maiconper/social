import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; // ✅ importa RouterLink

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink], // ✅ adiciona RouterLink aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
