import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Exercise {
  name: string;
  sets: number;
  reps: number;
  weight: number;
}

interface Workout {
  id: number;
  name: string;
  days: string[];
  exercises: Exercise[];
}

@Component({
  selector: 'app-workout-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.css']
})
export class WorkoutDetailComponent {
  workout: Workout | undefined;

  workouts: Workout[] = [
    {
      id: 1,
      name: 'Treino A - Peito e Tríceps',
      days: ['Segunda', 'Quinta'],
      exercises: [
        { name: 'Supino reto', sets: 4, reps: 10, weight: 40 },
        { name: 'Crucifixo', sets: 3, reps: 12, weight: 20 }
      ]
    },
    {
      id: 2,
      name: 'Treino B - Pernas',
      days: ['Terça', 'Sexta'],
      exercises: [
        { name: 'Agachamento livre', sets: 4, reps: 10, weight: 60 },
        { name: 'Leg press', sets: 4, reps: 12, weight: 120 }
      ]
    }
  ];

  showModal = false;
  newExercise: Exercise = { name: '', sets: 0, reps: 0, weight: 0 };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.workout = this.workouts.find(w => w.id === id);
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.newExercise = { name: '', sets: 0, reps: 0, weight: 0 };
  }

  saveExercise(): void {
    if (!this.workout) return;
    if (!this.newExercise.name.trim()) {
      alert('Informe o nome do exercício!');
      return;
    }

    this.workout.exercises.push({ ...this.newExercise });
    this.closeModal();
  }

  removeExercise(index: number): void {
    if (!this.workout) return;
    this.workout.exercises.splice(index, 1);
  }

  goBack(): void {
    this.router.navigate(['/workouts']);
  }
}
