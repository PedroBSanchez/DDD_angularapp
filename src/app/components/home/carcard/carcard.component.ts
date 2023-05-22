import { Component, Input, OnInit, Output } from '@angular/core';

import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

import { CarService } from 'src/app/services/car.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-carcard',
  templateUrl: './carcard.component.html',
  styleUrls: ['./carcard.component.css'],
})
export class CarcardComponent implements OnInit {
  modelUpdate: string = '';
  brandUpdate: string = '';
  yearUpdate!: number;

  @Input() carId!: number;
  @Input() model!: string;
  @Input() brand!: string;
  @Input() year!: number;

  @Input() deleteCarFunc: any;
  @Input() updateCarFunc: any;

  faTrash = faTrash;
  faEdit = faEdit;

  isUpdate: boolean = false;

  formModal: any;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.modelUpdate = this.model;
    this.brandUpdate = this.brand;
    this.yearUpdate = this.year;
  }

  test() {
    console.log(this.carId);
  }

  removeCar() {
    Swal.fire({
      title: 'Do you want to remove car?',
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteCarFunc(this.carId);
      }
    });
  }

  attCar() {
    console.log(this.carId);
    this.updateCarFunc(
      this.carId,
      this.modelUpdate,
      this.brandUpdate,
      this.yearUpdate
    );
    this.closeUpdate();
  }

  openUpdate() {
    this.isUpdate = true;
  }

  closeUpdate = () => {
    this.isUpdate = false;
  };
}
