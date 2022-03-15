import { Component } from '@angular/core';

export interface Todos {
  content: string;
  difficulty: string;
  toDo: boolean;
  inProgress: boolean;
  done: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todos[] = [];

  inputTodo = '';
  selectTodo = '';

  addTodo() {
    if (this.inputTodo.trim() !== '' && this.selectTodo.trim()) {
      this.todos.push({
        content: this.inputTodo,
        difficulty: this.selectTodo,
        toDo: true,
        inProgress: false,
        done: false,
      });

      console.log();
    } else {
      alert('Empty info');
    }

    this.inputTodo = '';
    this.selectTodo = '';
  }

  deleteToDo(idx: number) {
    this.todos = this.todos.filter((todo, index) => index !== idx);
  }

  moveToProgress(idx: number) {
    this.todos[idx].toDo = false;
    this.todos[idx].inProgress = true;
    this.todos[idx].done = false;
  }

  moveToDo(idx: number) {
    this.todos[idx].toDo = true;
    this.todos[idx].inProgress = false;
    this.todos[idx].done = false;
  }

  moveToDone(idx: number) {
    this.todos[idx].toDo = false;
    this.todos[idx].inProgress = false;
    this.todos[idx].done = true;
  }
}
