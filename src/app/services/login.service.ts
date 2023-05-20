import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:5142';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<any>(this.apiUrl + '/api/CreateTokenIdentity', {
      email: email,
      password: password,
      age: 0,
      name: '',
    });
  }

  signUp(email: string, password: string, age: number, name: string) {
    return this.http.post<any>(this.apiUrl + '/api/AddUserIdentity', {
      email: email,
      password: password,
      age: age,
      name: name,
    });
  }
}
