import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


interface Workout {
  id: number;
  name: string;
  days: string[];
  lastUpdate: string;
}

@Component({
  selector: 'app-workouts',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent {
  workouts: Workout[] = [
    {
      id: 1,
      name: 'Treino A - Peito e Tríceps',
      days: ['Segunda', 'Quinta'],
      lastUpdate: '2025-10-03'
    },
    {
      id: 2,
      name: 'Treino B - Pernas',
      days: ['Terça', 'Sexta'],
      lastUpdate: '2025-10-02'
    }
  ];

  addWorkout() {
    alert('Função para criar novo treino ainda será implementada!');
  }

  viewWorkout(id: number) {
    alert(`Visualizar detalhes do treino ID: ${id}`);
  }

  editWorkout(id: number) {
    alert(`Editar treino ID: ${id}`);
  }

  deleteWorkout(id: number) {
    if (confirm('Deseja realmente excluir este treino?')) {
      this.workouts = this.workouts.filter(w => w.id !== id);
    }
  }
}
