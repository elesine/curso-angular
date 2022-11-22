import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html'
})
export class FrutaComponent{
  public nombre_componente = 'Componente Frutas';
  public listado_frutas = 'naranaja, lima, manzana, fresa';
}
