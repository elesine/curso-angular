import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RopaService {
  public nombrePrenda = "Pantalones vaqueros";
  public coleccionRopa = ['Pantalones','Camiseta','Short'];

  constructor() { }

  prueba(nombrePrenda:string){
    return nombrePrenda;
  }
  addRopa(nombrePrenda:string):Array<string>{
    this.coleccionRopa.push(nombrePrenda);
    return this.getRopa();
  }
  getRopa(){
    return this.coleccionRopa;
  }
  deleteRopa(index:number){
    // delete this.coleccionRopa[index];
    this.coleccionRopa.splice(index, 1);

  }
}
