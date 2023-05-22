import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private apiUrl = 'http://localhost:5142';

  constructor(private http: HttpClient) {}

  addCar(brand: string, model: string, year: number) {
    const token = localStorage.getItem('token');

    const body = { name: brand, model: model, year: year, userId: '' };

    return this.http.post<any>(this.apiUrl + '/api/Add', body, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
        ContentType: 'application/json',
      }),
    });
  }

  update(carId: number, brand: string, model: string, year: number) {
    const token = localStorage.getItem('token');

    console.log(carId);

    const body = {
      id: carId,
      name: brand,
      model: model,
      year: year,
      userId: '',
    };

    return this.http.put<any>(this.apiUrl + '/api/Update', body, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
        ContentType: 'application/json',
      }),
    });
  }

  getAll(filter: number, value: string) {
    const token = localStorage.getItem('token');

    return this.http.get<any>(
      this.apiUrl + `/api/ListCustom/${filter}?filterValue=${value}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`,
          ContentType: 'application/json',
        }),
      }
    );
  }

  delete(carId: number) {
    const token = localStorage.getItem('token');

    return this.http.delete<any>(this.apiUrl + `/api/Delete/${carId}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
        ContentType: 'application/json',
      }),
    });
  }
}
