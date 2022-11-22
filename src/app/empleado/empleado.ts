export class Empleado{
  constructor(
    public nombre:string,
    public edad:number,
    public isAdmin:boolean = true,
    // public trabajos:Array<string>,
    // public passwords:Array<any>,
  ){}
}
