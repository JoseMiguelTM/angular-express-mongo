import { Component, OnInit } from '@angular/core';
import { ToDo } from './shared/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'To Do App';
  toDoContent: string | undefined;
  toDoList: ToDo[] = [];

  ngOnInit(): void {
    this.toDoList?.push({
      code: 200,
      success: true,
      message: 'Testing',
      data: {
        text: 'Test',
        _id: "0000",
        __v: 0
      }
    });
    console.log(this.toDoList)
  }

  saveToDo(): void {
    console.log(this.toDoContent);
    this.toDoList.push({
      code: 200,
      success: true,
      message: 'Testing',
      data: {
        text: this.toDoContent!,
        _id: "0000",
        __v: 0
      }
    });
    this.toDoContent = '';
  }
}
