import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
    providedIn: 'root'
})
export class SampService {
    MY_SERVER = "http://localhost:3000/todos"
    constructor(private http: HttpClient) { }

    getAllData(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.MY_SERVER)
    }

    delData(id: number): Observable<any> {
        const delUrl = this.MY_SERVER + "/" + id
        return this.http.delete<any>(delUrl)
    }

    addTodo(title: string, userId: number, completed: boolean): Observable<Todo> {
        return this.http.post<Todo>(this.MY_SERVER, { userId, title, completed })
    }

    updTodo(id: number,title: string, userId: number, completed: boolean): Observable<Todo> {
        const updUrl = this.MY_SERVER + "/" + id
        return this.http.put<Todo>(updUrl, { userId, title, completed })
    }
}
