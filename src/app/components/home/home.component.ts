import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  //<p *ngFor="let car of cars; index as index">{{ car.model }}</p>
  cars: Array<any> = [
    { brand: 'teste', model: 'civic', year: 1998 },
    { brand: 'teste', model: 'civic', year: 1998 },
    { brand: 'teste', model: 'civic', year: 1998 },
    { brand: 'teste', model: 'civic', year: 1998 },
    { brand: 'teste', model: 'civic', year: 1998 },
    { brand: 'teste', model: 'civic', year: 1998 },
    { brand: 'teste', model: 'civic', year: 1998 },
    { brand: 'teste', model: 'civic', year: 1998 },
    { brand: 'teste', model: 'civic', year: 1998 },
    { brand: 'teste', model: 'civic', year: 1998 },
  ];

  formModal: any;

  newBrand: string = '';
  newModel: string = '';
  newYear!: number;

  constructor() {}

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal1')
    );
  }

  openModal() {
    this.formModal.show();
  }

  closeModal() {
    this.formModal.hide();
  }
}
