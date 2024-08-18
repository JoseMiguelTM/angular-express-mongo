import { Component, OnInit } from '@angular/core';
import { MongoToDo, ToDo } from './shared/todo.model';
import { TodoApiService } from './services/todo-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'To Do App';
  toDoContent: string;
  toDoList: MongoToDo | undefined;

  constructor(private todoService: TodoApiService) {
    this.toDoContent = '';
  }

  ngOnInit(): void {
    this.getToDos();
  }

  getToDos() {
    this.todoService.getToDos().subscribe({
      next: (response: MongoToDo) => {
        this.toDoList = response;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  saveToDo(): void {
    const todoBody: ToDo = {
      text: this.toDoContent,
    }
    this.todoService.saveToDo(todoBody).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      }
    });
    this.toDoContent = '';
  }
}