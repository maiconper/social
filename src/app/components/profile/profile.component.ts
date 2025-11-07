import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from '../posts/posts.component';
import { Router } from '@angular/router';
import { WorkoutService } from '../../services/workout.service'; // ✅ novo import

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

interface WeeklyStats {
  yoga: number;
  mobility: number;
  strength: number;
  cardio: number;
  total: number;
}


interface Workout {
  name: string;
  muscles: string;
  exercises: Exercise[];
}

interface Tag {
  label: string;
  color: string;
  icon: string;
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
  tags: Tag[] = []; // ✅ agora o perfil tem tags

todayWorkout: Workout & { duration: number; calories: number } | null = {
  name: 'Treino A',
  muscles: 'Peito e Tríceps',
  duration: 42,
  calories: 320,
  exercises: [
    { name: 'Supino reto', sets: 4, reps: 10, weight: 40 },
    { name: 'Crucifixo', sets: 3, reps: 12, weight: 20 },
    { name: 'Tríceps pulley', sets: 4, reps: 10, weight: 30 }
  ]
};

  constructor(private router: Router, private workoutService: WorkoutService) {
    this.generateWeek();
    this.generateTags(); // ✅ gera tags dinâmicas com base no histórico
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

  /** 🔥 Gera as tags automaticamente com base no histórico */
  generateTags() {
    const stats = this.workoutService.getWeeklyStats();
    const tags: Tag[] = [];
    console.log('📊 Estatísticas semanais:', stats);

    if ((stats.yoga + stats.mobility) >= 2) {
      tags.push({ label: 'Zen Gains', color: '#9c27b0', icon: '🧘' });
    }
    if (stats.strength >= 2) {
      tags.push({ label: 'Iron Mode', color: '#ff9800', icon: '🏋️' });
    }
    if (stats.cardio >= 2) {
      tags.push({ label: 'Cardio King', color: '#03a9f4', icon: '🚴' });
    }
    if (stats.total >= 3) {
      tags.push({ label: 'Consistency Beast', color: '#4caf50', icon: '💪' });
    }

    this.tags = tags;
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
