import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'mwl-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  mostrarUsuarios(){
    return this.httpClient.post('http://localhost:3000/usuario/obtener', {
        
    }).subscribe(
          data => {
            console.log(data.usuarios);
            let i = 0;
            document.getElementById('contenido').innerHTML = '';
            for (let usuarios of data.usuarios) {
            i = i++;

            document.getElementById('contenido').innerHTML += `
                              
                              <tr>
                                  <th scope="row">${ usuarios.nombre }</th>
                                  <td>${ usuarios.apellidos }</td>
                                  <td>${ usuarios.matricula }</td>
                                  <td>${ usuarios.puesto }</td>
                                  <td>${ usuarios.estado }</td>
                                  <td> <button (click)="activar()" >Permitir</button>
                                  </td>

                                  </td>
                              </tr>
                                     `;
          }
            
                   

          },
          (err) => {
            console.log(err);
            alert( 'ERROR\n'+ err.error.err.message);

          }


        );

  }
  activar(){
    let matricula = document.getElementById('Matricula').value;
    console.log(matricula);
    return this.httpClient.post('http://localhost:3000/usuario/actualizar/estado', {
        matricula
    }).subscribe(
          data => {
            console.log(data);
          },
          (err) => {
            console.log(err);
          }
        );
  }

  ngOnInit() {
    this.mostrarUsuarios();
  }

}
