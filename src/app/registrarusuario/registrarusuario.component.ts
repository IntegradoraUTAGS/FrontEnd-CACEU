import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'mwl-registrarusuario',
  templateUrl: './registrarusuario.component.html',
  styleUrls: ['./registrarusuario.component.scss']
})
export class RegistrarusuarioComponent implements OnInit {
  nombre: string;
  apellidos: string;
  matricula: string;
  password: string;
  confirmacionpassword: string;
  confirmacion: string;
  puesto: string;
  constructor(private httpClient: HttpClient, private router: Router) {}

  guardar() {
    this.nombre = (<HTMLInputElement>document.getElementById('nombre')).value;
    this.apellidos = (<HTMLInputElement>(
      document.getElementById('apellidos')
    )).value;
    this.matricula = (<HTMLInputElement>(
      document.getElementById('matricula')
    )).value;
    this.password = (<HTMLInputElement>(
      document.getElementById('contrasena')
    )).value;
    this.nombre = (<HTMLInputElement>document.getElementById('nombre')).value;
    this.confirmacion = (<HTMLInputElement>(
      document.getElementById('confirmacion')
    )).value;
    this.puesto = (<HTMLInputElement>document.getElementById('puesto')).value;
    console.log(this.nombre);
    console.log(this.apellidos);
    console.log(this.matricula);
    console.log(this.password);
    console.log(this.confirmacion);
    console.log(this.puesto);

    if (this.password === this.confirmacion) {
      return this.httpClient
        .post('http://localhost:3000/usuario/registrar', {
          nombre: this.nombre,
          apellidos: this.apellidos,
          matricula: this.matricula,
          password: this.password,
          puesto: this.puesto
        })
        .subscribe(
          data => {
            console.log(data);
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Exito',
              text:
                this.nombre +
                ' Ha sido registrado con exito!\n' +
                'Tu solicitud para poder hacer cambios en el calendario ha sido enviada',
              showConfirmButton: true
            });
            this.router.navigate(['calendarioAnual']);
            this.nombre = this.apellidos = this.password = this.puesto = '';
            this.matricula = '';
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
    } else {
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Ha Ocurrido un Error',
        text: 'Favor de Confirmar tu Contraseña',
        showConfirmButton: true
      });
    }
  }

  ngOnInit() {
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'Bienvenido al Registro',
      text:
        'Al registrarte se envia una solicitud para que un usuario pueda hacer modificaciones sobre el calendario, por lo cual solo se le dara acceso a personal autorizado',
      showConfirmButton: true
    });
  }
}
