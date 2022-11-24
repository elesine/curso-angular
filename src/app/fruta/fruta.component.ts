import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html'
})
export class FrutaComponent{
  public nombre_componente = 'Componente Frutas';
  public listado_frutas = 'naranaja, lima, manzana, fresa';
  public parametro:any;
  constructor(
     private route: ActivatedRoute,
     private router: Router
  ){}

  ngOnInit(){
    this.route.params.forEach((params:Params) => {
      this.parametro = params['page'];
      console.log(params);
    });
  }

  redirectTo(){
    this.router.navigate(['/home']);
  }
}
