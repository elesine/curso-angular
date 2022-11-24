import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Coche} from './coche';

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent {
  public coche: Coche;
  public coches: Array<Coche>;

  constructor(){
    this.coche = new Coche("",0,"",false);
    this.coches = [
      new Coche("nissa",2,"verde",true),
      new Coche("toyota",1,"negro",false),
      new Coche("tucson",3,"blanco",true)
    ];
  }

  onSubmit(form: NgForm ){
    this.coches.push(this.coche);
    this.coche = new Coche("",0,"",false);
    console.log(this.coche);
    form.resetForm();
  }
}
