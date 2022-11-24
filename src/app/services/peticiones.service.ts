import { Injectable } from '@angular/core';
// import {Http, Response, Headers} from '@angular/http';
import {HttpClient, HttpParams, HttpHeaders} from  '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/Rx';
// import { Observable, pipe, throwError } from 'rxjs';
// import { catchError, retry,  filter, switchMap} from 'rxjs/operators';
import { map } from "rxjs/operators";
import {Observable} from 'rxjs';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';

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
