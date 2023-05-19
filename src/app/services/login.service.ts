import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:5142';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): string | boolean {
    return true;
    let token = '';
    this.http.post<any>(this.apiUrl, {}).subscribe((response) => {});
  }
}
