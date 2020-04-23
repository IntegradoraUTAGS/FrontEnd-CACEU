import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'mwl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private httpClient: HttpClient, private router: Router) {}

  postlogin() {
    let matricula = (<HTMLInputElement>document.getElementById('usuario'))
      .value;

    let password = (<HTMLInputElement>document.getElementById('password'))
      .value;

    console.log(matricula);
    console.log(password);
    return this.httpClient
      .post('http://localhost:3000/login/iniciar', {
        matricula,
        password
      })
      .subscribe(
        data => {
          console.log(data);
          //alert( data.mensaje)
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Bienvenido al Calendario Academico',
            showConfirmButton: true
          });
          this.router.navigate(['']);
        },
        err => {
          console.log(err);
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error',
            text: err.error.err.message,
            showConfirmButton: true
          });
        }
      );
  }

  ngOnInit() {}
}
