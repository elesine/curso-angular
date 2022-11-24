import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RopaService],
})
export class HomeComponent {
  public titulo: string = 'Página principal';
  public listadoRopa: Array<string>;
  public ropa: string;
  public fecha;

  constructor(private ropaService: RopaService) {
    this.listadoRopa = this.ropaService.getRopa();
    this.ropa = '';
    this.fecha = new Date("January 25 2015");
  }

  ngOnInit(){
    console.log(this.ropaService.prueba("camiseta"));
    console.log(this.listadoRopa);
  }

  agregarPrenda(){
    this.ropaService.addRopa(this.ropa);
    // return this.ropaService.getRopa();
    this.ropa = '';
  }
  eliminarPrenda(index:number){
    // alert(index);
    this.ropaService.deleteRopa(index);
  }

}

