import { Component } from "@angular/core";

@Component({
  selector: 'empleado',
  templateUrl: './empleado.component.html'
})
export class EmpleadoComponent{
  public nombre:string = 'gcanasac';
  public edad:number = 12;
  public isAdmin:boolean = true;
  public especialidad:Array<string> = ['db','cloud','frontend','backend'];
  public passwords:Array<any> = ['hyisj',1234];
}
