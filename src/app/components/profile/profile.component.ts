import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from '../posts/posts.component'; // ✅ importa o CRUD
import { Router } from '@angular/router';

interface Day {
  name: string;
  date: number;
  status: 'done' | 'pending' | 'rest';
  isToday: boolean;
}

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

  weekDays: Day[] = [];
  currentMonth = '';

  constructor(private router: Router) {
    // ✅ Aqui sim é o local correto para chamar métodos de inicialização
    this.generateWeek();
  }

  generateWeek() {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()); // domingo

    const dayNames = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const statuses: Day['status'][] = ['done', 'pending', 'done', 'rest', 'pending', 'done', 'rest'];

    this.weekDays = dayNames.map((name, i) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      return {
        name,
        date: date.getDate(),
        status: statuses[i],
        isToday: date.toDateString() === today.toDateString()
      };
    });

    const monthNames = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    this.currentMonth = `${monthNames[today.getMonth()]} ${today.getFullYear()}`;
  }

  addWorkout() {
    alert('Função para adicionar treino ainda será implementada!');
  }

  goToMyWorkouts() {
    // ✅ agora redireciona corretamente
    this.router.navigate(['/workouts']);
  }
}
