import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'mwl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private httpClient: HttpClient, private router: Router) {}

  postlogin() {
   let matricula = document.getElementById('usuario').value
    let password = document.getElementById('password').value

    console.log(matricula);
    console.log(password);
    return this.httpClient.post('http://localhost:3000/login/iniciar', {
        matricula,
       password
    }).subscribe(
          data => {
            console.log(data);
            alert( data.mensaje)
            this.router.navigate(['']);

          },
          (err) => {
            console.log(err);
            alert( 'ERROR\n'+ err.error.err.message);

          }


        );
  }

  ngOnInit() {}
}
