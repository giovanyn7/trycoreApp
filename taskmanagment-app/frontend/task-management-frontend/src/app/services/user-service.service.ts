import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private apiUrl = 'http://localhost:8080/users';

    constructor(private http: HttpClient) { }

    createUser(user: any): Observable<any> {
        return this.http.post(this.apiUrl, user);
    }

    getUsers(role?: string): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}${role ? '?role=' + role : ''}`);
    }
}
