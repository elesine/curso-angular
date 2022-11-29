import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from  '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
import { map } from "rxjs";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService{

  public url: string;

  constructor(private http: HttpClient) {
    this.url = "https://jsonplaceholder.typicode.com/posts";
  }
  getPrueba(){
    return 'Hola mundo desde el servicio.';
  }
  getArticulos(): Observable<any>{
    // console.log("PETICIONES")
    // let jsonResponse = this.http.get<any>(this.url).subscribe( data => {
    //   this.results = data.results;
    // })
    // console.log("jsoonResponse: ",jsonResponse);
    // return jsonResponse;
    console.log("PETICIONES")
    console.log(this.http.get(this.url).pipe(map(res => {return res})))
    return this.http.get(this.url).pipe(map(res => {return res}));

  }
}
