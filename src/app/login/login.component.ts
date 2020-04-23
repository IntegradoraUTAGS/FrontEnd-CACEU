import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras} from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'mwl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  matricula: string;
  password: string;
  constructor(private httpClient: HttpClient, private router: Router) {
    this.password = '';
    this.matricula = '';
  }

  postlogin() {
   this.matricula = (<HTMLInputElement>document.getElementById('usuario')).value
   this.password = (<HTMLInputElement>document.getElementById('password')).value
    console.log(this.matricula);
    console.log(this.password);
    return this.httpClient.post('http://172.17.1.7:5023/login/iniciar', {
        matricula: this.matricula,
       password: this.password
    }).subscribe(
          data => {
            console.log(data);
            //alert( data.mensaje)
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Bienvenido ',
              showConfirmButton: true,
              
            })
            this.router.navigate(['']);

          },
          (err) => {
            console.log(err);
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Error',
              text: err.error.err.message,
              showConfirmButton: true
              
            })

          }


        );
  }

  ngOnInit() {}
}
