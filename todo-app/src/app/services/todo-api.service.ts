import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { MongoToDo, ToDo } from '../shared/todo.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  private API_URL = environment.API_URL;

  private toDoList: MongoToDo[] = [];

  constructor(private httpClient: HttpClient) { }

  getToDos(): Observable<MongoToDo[]> {
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

    return of(this.toDoList);
  }

  saveToDo(toDoItem: ToDo): Observable<any> {
    console.log(toDoItem);
    return of(toDoItem);
  }
}