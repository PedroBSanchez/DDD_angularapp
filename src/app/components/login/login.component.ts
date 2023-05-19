import { Component, Input, OnInit } from '@angular/core';
import { LoadingComponent } from '../loading/loading.component';
import { LoginService } from 'src/app/services/login.service';

declare var window: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  newEmail: string = '';
  newPassword: string = '';

  loading: boolean = false;

  formModal: any;

  login(): void {
    console.log('ok');
  }

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );
  }

  openModal() {
    this.formModal.show();
  }

  doSomething() {
    this.formModal.hide();
  }
}
