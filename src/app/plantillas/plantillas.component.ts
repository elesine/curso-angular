import { Component } from '@angular/core';

@Component({
  selector: 'plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent {
  public titulo;
  public administrador;
  public datoExterno = "Gretel Canasa dato externo";
  public identity = {
    id: 1,
    web: 'gcanasac.com',
    tematica: 'web programming'
  };
  public datosDelHijo: any;


  constructor(){
    this.titulo = "Componente Plantillas";
    this.administrador = true;
    this.datosDelHijo = '';
  }

  cambiarEstado(value: boolean){
    this.administrador = value;
  }

  recibirDatos(event: any){
    console.log(event);
    this.datosDelHijo = event;
  }
}
