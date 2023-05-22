import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { CarService } from 'src/app/services/car.service';

import Swal from 'sweetalert2';

declare let window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  search: string = '';
  filter: number = 1;

  cars: Array<any> = [];

  formModal: any;

  newBrand: string = '';
  newModel: string = '';
  newYear!: number;

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal1')
    );

    this.getAll();
  }

  getAll() {
    this.carService
      .getAll(this.filter, this.search)
      .pipe(
        catchError((error) => {
          const statusCode = error.status;

          Swal.fire({
            icon: 'error',
            title: 'Something went wrong',
            showConfirmButton: false,
          });

          return throwError(error);
        })
      )
      .subscribe((response) => {
        this.cars = response;
      });
  }

  addCar() {
    this.carService
      .addCar(this.newBrand, this.newModel, this.newYear)
      .pipe(
        catchError((error) => {
          const statusCode = error.status;
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong',
            showConfirmButton: false,
          });
          return throwError(error);
        })
      )
      .subscribe((response) => {
        this.newBrand = '';
        this.newModel = '';
        let numberRestart!: number;
        this.newYear = numberRestart;
        this.getAll();
        this.closeModal();
        Swal.fire({
          icon: 'success',
          title: 'Car successfully added',
          showConfirmButton: false,
        });
      });
  }

  deleteCar = (carId: number) => {
    this.carService
      .delete(carId)
      .pipe(
        catchError((error) => {
          const statusCode = error.status;

          Swal.fire({
            icon: 'error',
            title: 'Something went wrong',
            showConfirmButton: false,
          });

          return throwError(error);
        })
      )
      .subscribe((response) => {
        this.getAll();
        Swal.fire({
          icon: 'success',
          title: 'Car successfully deleted',
          showConfirmButton: false,
        });
      });
  };

  updateCar = (carId: number, brand: string, model: string, year: number) => {
    this.carService
      .update(carId, brand, model, year)
      .pipe(
        catchError((error) => {
          const statusCode = error.status;

          Swal.fire({
            icon: 'error',
            title: 'Something went wrong',
            showConfirmButton: false,
          });

          return throwError(error);
        })
      )
      .subscribe((response) => {
        this.getAll();
        Swal.fire({
          icon: 'success',
          title: 'Car successfully updated',
          showConfirmButton: false,
        });
      });
  };

  openModal() {
    this.formModal.show();
  }

  closeModal() {
    this.formModal.hide();
  }
}
