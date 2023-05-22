import { Component, Input, OnInit, Output } from '@angular/core';

import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

import { CarService } from 'src/app/services/car.service';

import Swal from 'sweetalert2';

declare let window: any;

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

  formModal: any;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal1')
    );
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

  updateCar = () => {
    this.updateCarFunc(
      this.carId,
      this.modelUpdate,
      this.brandUpdate,
      this.yearUpdate
    );

    this.closeModal();
  };

  openModal() {
    this.formModal.show();
  }

  closeModal() {
    this.formModal.hide();
  }
}
