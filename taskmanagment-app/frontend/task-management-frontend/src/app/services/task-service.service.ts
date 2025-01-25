import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TaskService {
    private apiUrl = 'http://localhost:8080/tasks';

    constructor(private http: HttpClient) { }

    createTask(task: any): Observable<any> {
        return this.http.post(this.apiUrl, task);
    }

    updateTaskStatus(id: number, status: string): Observable<any> {
        return this.http.put(`${this.apiUrl}/${id}/status?status=${status}`, {});
    }

    getTasks(status?: string, userId?: number): Observable<any[]> {
        const params = [];
        if (status) params.push(`status=${status}`);
        if (userId) params.push(`userId=${userId}`);
        const query = params.length ? '?' + params.join('&') : '';
        return this.http.get<any[]>(`${this.apiUrl}${query}`);
    }
}