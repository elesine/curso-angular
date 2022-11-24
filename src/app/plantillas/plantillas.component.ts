import { Component } from '@angular/core';

@Component({
  selector: 'plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent {
  public titulo;
  public administrador;

  constructor(){
    this.titulo = "Componente Plantillas";
    this.administrador = true;
  }

  cambiarEstado(value: boolean){
    this.administrador = value;
  }
}
