import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Coche} from './coche';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent {
  public coche: Coche;
  public coches: Array<Coche>;
  public articulos: Array<any>;

  constructor( private peticionesService: PeticionesService){
    this.coche = new Coche("",0,"",false);
    this.coches = [
      new Coche("nissa",2,"verde",true),
      new Coche("toyota",1,"negro",false),
      new Coche("tucson",3,"blanco",true)
    ];
    this.articulos = [];
  }

  ngOnInit(){
    console.log("INICIO Componente coches")
    console.log(this.peticionesService.getArticulos().subscribe(
      result => {
        console.log( "RESULT", result)

        this.articulos = result;
        console.log( "RESULT", result)
      },
      error => {
        console.log(error);
      }
    ));
    console.log("FIN Componente coches")

    // for(const prop in _jsonResponse) {
    //   this.articulos.push(_jsonResponse[prop]);
    // }


  }

  onSubmit(form: NgForm ){
    this.coches.push(this.coche);
    this.coche = new Coche("",0,"",false);
    console.log(this.coche);
    form.resetForm();
  }
}
