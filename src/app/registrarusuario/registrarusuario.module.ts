import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarusuarioComponent } from './registrarusuario.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [RegistrarusuarioComponent],
  imports: [
    CommonModule,
    HttpClientModule

  ]
})
export class RegistrarusuarioModule { }
