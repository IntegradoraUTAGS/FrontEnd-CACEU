import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'mwl-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
   users:any;
  constructor(private httpClient: HttpClient) {
   this.users=[];
   }

  mostrarUsuarios(){
    return this.httpClient.post('http://localhost:3000/usuario/obtener', {
        
    }).subscribe(
          data => {
            this.users = data;
            console.log(this.users);

            let i = 0;
            document.getElementById('contenido').innerHTML = '';
            for (let usuarios of this.users.usuarios) {
            i = i++;

            document.getElementById('contenido').innerHTML += `
                              
                              <tr>
                                  <th scope="row">${ usuarios.nombre }</th>
                                  <td>${ usuarios.apellidos }</td>
                                  <td>${ usuarios.matricula }</td>
                                  <td>${ usuarios.puesto }</td>
                                  <td>${ usuarios.estado }</td>
                                  <td>  </td>

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

    Swal.fire({
      title: 'Estas Seguro?',
      text: "Daras permisos de Modificaciones a este Usuario",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Permitir'
    }).then((result) => {
      let matricula = (<HTMLInputElement>document.getElementById('Matricula')).value
    console.log(matricula);
    console.log('activado')
    if (result.value) {
        return this.httpClient.post('http://localhost:3000/usuario/actualizar/estado/permitir', {
        matricula
    }).subscribe(
          data => {
            console.log(data);
            this.mostrarUsuarios();
            Swal.fire(
              'Hecho!',
              'Usuario Permitido.',
              'success'
            )
          },
          (err) => {
            console.log(err);
          }
        );
        
      }
    })
    

  }

  desactivar(){
    Swal.fire({
      title: 'Estas Seguro?',
      text: "Removeras permisos de Modificaciones y acceso al sistema a este Usuario ",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.value) {
        let matricula = (<HTMLInputElement>document.getElementById('Matricula2')).value
    console.log(matricula);
    console.log('activado')
    return this.httpClient.post('http://localhost:3000/usuario/actualizar/estado/denegar', {
        matricula
    }).subscribe(
          data => {
            console.log(data);
            this.mostrarUsuarios();
            Swal.fire(
              'Hecho!',
              'Este usuario no tiene mas permisos de Modificar.',
              'success'
            )
          },
          (err) => {
            console.log(err);
          }
        );

      }
    })

    
  }


  ngOnInit() {
    this.mostrarUsuarios();
  }

}
