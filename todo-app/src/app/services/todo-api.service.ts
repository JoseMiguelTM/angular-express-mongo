import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { MongoToDo, ToDo, ToDoResponse } from '../shared/todo.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  private API_URL = environment.API_URL;

  constructor(private httpClient: HttpClient) {}

  getToDos(): Observable<MongoToDo> {
    return this.httpClient.get<MongoToDo>(`${this.API_URL}/api`);
  }

  saveToDo(toDoItem: ToDo): Observable<ToDoResponse> {
    return this.httpClient.post<ToDoResponse>(`${this.API_URL}/api/todos`, toDoItem);
  }
}