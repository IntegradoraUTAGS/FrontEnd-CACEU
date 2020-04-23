import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'mwl-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.scss']
})
export class FormEventComponent implements OnInit {
  nombre: string;
  tipo: string;
  enfoque: string;
  fechaInicio: string;
  fechaFinal: string;
  descripcion: string;
  repetir: string;
  lugar: string;
  hora: string;
  capacidad: string;
  detalles: string;
  usuario: string;
  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit() {}

  guardar() {
    this.nombre = (<HTMLInputElement>document.getElementById('nombre')).value
    this.tipo = (<HTMLInputElement>document.getElementById('tipo')).value
    this.enfoque = (<HTMLInputElement>document.getElementById('enfoque')).value
    this.fechaInicio = (<HTMLInputElement>document.getElementById('fechaInicio')).value
    this.fechaFinal = (<HTMLInputElement>document.getElementById('fechaFinal')).value
    this.descripcion = (<HTMLInputElement>document.getElementById('descripcion')).value
    this.repetir = (<HTMLInputElement>document.getElementById('repetir')).value
    this.lugar = (<HTMLInputElement>document.getElementById('lugar')).value
    this.hora = (<HTMLInputElement>document.getElementById('hora')).value
    this.capacidad = (<HTMLInputElement>document.getElementById('capacidad')).value
    this.detalles = (<HTMLInputElement>document.getElementById('detalles')).value
    this.usuario = (<HTMLInputElement>document.getElementById('usuario')).value

    console.log(this.nombre);
    console.log(this.tipo);
    console.log(this.enfoque);
    console.log(this.fechaInicio);
    console.log(this.fechaFinal);
    console.log(this.descripcion);

    console.log(this.repetir);
    console.log(this.lugar);
    console.log(this.hora);
    console.log(this.capacidad);
    console.log(this.detalles);
    console.log(this.usuario);

    return this.httpClient
      .post('http://localhost:3000/evento/registrar', {
        nombre: this.nombre,
        tipo: this.tipo,
        enfoque: this.enfoque,
        fechaInicio: this.fechaInicio,
        fechaFinal: this.fechaFinal,
        descripcion: this.descripcion,
        repetir: this.repetir,
        lugar: this.lugar,
        hora: this.hora,
        capacidad: this.capacidad,
        detalles: this.detalles,
        usuario: this.usuario
      })
      .subscribe(
        data => {
          console.log(data);
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Exito',
            text: this.nombre + ' Ha sido registrado con exito!',
            showConfirmButton: true
          });
          this.router.navigate(['calendarioAnual']);
          this.nombre = this.tipo = this.fechaInicio = this.repetir = this.lugar;
          this.hora = this.capacidad = this.detalles = this.usuario = this.descripcion =
            '';
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
}
