import { Component } from "@angular/core";
import { Empleado } from "./empleado";

@Component({
  selector: 'empleado',
  templateUrl: './empleado.component.html'
})
export class EmpleadoComponent{

  public titulo:string = 'Componente Empleado';
  public empleado:Empleado;
  public trabajadores:Array<Empleado>;
  public trabajadorExterno:boolean;
  public color:string;

  constructor(){
    this.empleado = new Empleado('Dani', 20, true);
    this.trabajadores = [
      new Empleado('Daniela', 40, true),
      new Empleado('Rodrigo', 22, false),
      new Empleado('Salo', 30, true)
    ];
    this.trabajadorExterno = false;
    this.color = 'blue';
  }

  ngOnInit(){
    console.log(this.empleado);
    console.log(this.trabajadores);
  }

  cambiarExterno(valor:boolean){
    this.trabajadorExterno = valor;
  }
}

  // public nombre:string;
  // public edad:number;
  // public isAdmin:boolean = true;
  // public trabajos:Array<string>;
  // public passwords:Array<any>;

  // constructor(nombre, edad, isAdmin, trabajos, passwords){
  //   this.nombre = nombre;
  //   this.edad = edad;
  //   this.isAdmin = isAdmin;
  //   this.trabajos = trabajos;
  //   this.passwords = passwords;
  //
  // public nombre:string = 'gcanasac';
  // public edad:number = 12;
  // public isAdmin:boolean = true;
  // public trabajos:Array<string> = ['db','cloud','frontend','backend'];
  // public passwords:Array<any> = ['hyisj',1234];

