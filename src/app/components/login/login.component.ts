import { Component, Input, OnInit } from '@angular/core';
import { LoadingComponent } from '../loading/loading.component';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';

declare let window: any;

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
  newName: string = '';
  newAge!: number;

  loading: boolean = false;

  formModal: any;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );

    //this.router.navigate(['/home']);
  }

  login(
    emailParam: string = this.email,
    passwordParam: string = this.password
  ) {
    this.loading = true;
    this.loginService
      .login(emailParam, passwordParam)
      .pipe(
        catchError((error) => {
          const statusCode = error.status;

          this.loading = false;
          Swal.fire({
            icon: 'error',
            title: 'Invalid credentials',
            showConfirmButton: false,
          });

          return throwError(error);
        })
      )
      .subscribe((token) => {
        this.loading = false;
        localStorage.setItem('token', token);
        this.router.navigate(['/home']);
      });
  }

  signUp() {
    if (!this.isValidPassword()) {
      return Swal.fire({
        icon: 'error',
        title: 'Invalid Password',
        footer:
          '<ul><li>Uppercase character</li><li>Lowercase character</li><li>Special character</li><li>Numbers</li><ul>',
        showConfirmButton: true,
      });
    }

    this.loading = true;
    this.loginService
      .signUp(this.newEmail, this.newPassword, this.newAge, this.newName)
      .pipe(
        catchError((error) => {
          this.loading = false;
          const statusCode = error.statusCode;
          Swal.fire({
            icon: 'error',
            title: 'Invalid credentials',
            showConfirmButton: false,
          });

          this.doSomething();
          return throwError(error);
        })
      )
      .subscribe((response) => {
        this.loading = false;
        this.doSomething();
        return Swal.fire({
          icon: 'success',
          title: 'Successfully registered user',
          showConfirmButton: true,
        });

        //this.login(this.newEmail, this.newPassword);
      });

    return true;
  }

  isValidPassword() {
    let passwordRegExp =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

    if (!passwordRegExp.test(this.newPassword)) {
      return false;
    }
    return true;
  }

  openModal() {
    this.formModal.show();
  }

  doSomething() {
    this.formModal.hide();
  }
}
