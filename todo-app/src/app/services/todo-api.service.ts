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

  constructor(private httpClient: HttpClient) {}

  getToDos(): Observable<MongoToDo> {
    return this.httpClient.get<MongoToDo>(`${this.API_URL}/api`);
  }

  saveToDo(toDoItem: ToDo): Observable<any> {
    return of(toDoItem);
  }
}