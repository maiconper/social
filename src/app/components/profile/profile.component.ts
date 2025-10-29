import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from '../posts/posts.component';
import { Router } from '@angular/router';

interface Day {
  name: string;
  date: number;
  status: 'done' | 'pending' | 'rest';
  isToday: boolean;
}

interface Exercise {
  name: string;
  sets: number;
  reps: number;
  weight: number;
}

interface Workout {
  name: string;
  muscles: string;
  exercises: Exercise[];
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, PostsComponent],
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
  showWorkoutMenu = false;

  todayWorkout: Workout | null = {
    name: 'Treino A',
    muscles: 'Peito e Tríceps',
    exercises: [
      { name: 'Supino reto', sets: 4, reps: 10, weight: 40 },
      { name: 'Crucifixo', sets: 3, reps: 12, weight: 20 },
      { name: 'Tríceps pulley', sets: 4, reps: 10, weight: 30 }
    ]
  };

  constructor(private router: Router) {
    this.generateWeek();
  }

  generateWeek() {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());

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
    this.router.navigate(['/workouts']);
  }

  goToHistory() {
    this.router.navigate(['/history']);
  }

  startWorkout() {
    alert('🔜 Função de iniciar treino ainda será implementada!');
  }

  viewWorkoutDetails() {
  // Por enquanto ID fixo (1), depois podemos deixar dinâmico
  this.router.navigate(['/workouts', 1]);
  }

  toggleWorkoutMenu() {
    this.showWorkoutMenu = !this.showWorkoutMenu;
  }

  editWorkout() {
    alert('✏️ Editar treino — funcionalidade em desenvolvimento.');
    this.showWorkoutMenu = false;
  }

  replaceWorkout() {
    alert('🔁 Substituir treino — funcionalidade em desenvolvimento.');
    this.showWorkoutMenu = false;
  }

  deleteWorkout() {
    if (confirm('Tem certeza que deseja excluir o treino de hoje?')) {
      this.todayWorkout = null;
    }
    this.showWorkoutMenu = false;
  }

  goToBody() {
    this.router.navigate(['/body']);
  }
}
