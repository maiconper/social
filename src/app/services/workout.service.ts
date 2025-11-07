import { Injectable } from '@angular/core';

export interface WorkoutHistory {
  date: string;
  name: string;
  type: 'yoga' | 'mobility' | 'strength' | 'cardio'; // tipos conhecidos
  muscles: string;
  status: 'done' | 'pending';
}

/** ✅ Interface específica para o resumo semanal */
export interface WeeklyStats {
  yoga: number;
  mobility: number;
  strength: number;
  cardio: number;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
private history: WorkoutHistory[] = [
  { date: '2025-11-05', name: 'Yoga Flow', type: 'yoga', muscles: 'Corpo inteiro', status: 'done' },
  { date: '2025-11-05', name: 'Mobilidade', type: 'mobility', muscles: 'Pernas', status: 'done' },
  { date: '2025-11-05', name: 'Treino A', type: 'strength', muscles: 'Peito e tríceps', status: 'done' },
  { date: '2025-11-04', name: 'Treino B', type: 'strength', muscles: 'Costas e bíceps', status: 'done' },
  { date: '2025-11-05', name: 'Cardio Run', type: 'cardio', muscles: 'Corpo inteiro', status: 'done' },
  { date: '2025-11-05', name: 'Yoga Restore', type: 'yoga', muscles: 'Mobilidade e relaxamento', status: 'done' }
];

  getHistory(): WorkoutHistory[] {
    return this.history;
  }

  /** ✅ Agora retorna um objeto tipado corretamente */
  getWeeklyStats(): WeeklyStats {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());

    const counts: WeeklyStats = {
      yoga: 0,
      mobility: 0,
      strength: 0,
      cardio: 0,
      total: 0
    };

    for (const h of this.history) {
      const date = new Date(h.date);
      if (date >= startOfWeek && date <= today && h.status === 'done') {
        counts.total++;
        if (h.type in counts) {
          counts[h.type]++;
        }
      }
    }

    return counts;
  }
}
