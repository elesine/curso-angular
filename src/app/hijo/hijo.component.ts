import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  public title: string;
  @Input() propiedadUno: string;
  @Input('texto2') propiedadDos: string;
  @Input('texto3') propiedadTres: string;
  @Input('texto4') propiedadCuatro: string;
  @Output() desdeElHijo = new EventEmitter();

  constructor(){
    this.title = "Componente hijo";
    this.propiedadUno = '';
    this.propiedadDos = '';
    this.propiedadTres = '';
    this.propiedadCuatro = '';

  }

  ngOnInit(){
    console.log("3",this.propiedadTres);
    // // Por defecto puedo usar la funcion para que el componengte padre tenga los datos de componente hijo
    // this.enviar()
  }

  enviar(){
    this.desdeElHijo.emit({nombre: "Metodo enviar desde hijo",
                           edad:10});
  }
}
