import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WorkoutHistory {
  date: string;
  name: string;
  muscles: string;
  status: 'done' | 'pending';
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  history: WorkoutHistory[] = [
    { date: '22/10/2025', name: 'Treino A', muscles: 'Peito e Tríceps', status: 'pending' },
    { date: '21/10/2025', name: 'Treino B', muscles: 'Pernas', status: 'done' },
    { date: '20/10/2025', name: 'Treino C', muscles: 'Costas', status: 'done' }
  ];
}
