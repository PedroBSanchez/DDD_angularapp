import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

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
  ];

  constructor() {}

  ngOnInit(): void {}
}
