import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SaveRecetasService {

  constructor(private http :HttpClient) { }
  public URL:string ='http://localhost:4000';
  public newReceta : object
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };

  saveReceta(datos){
    this.http.post(this.URL, datos, this.httpOptions).subscribe(
      res => this.newReceta = res,
      err => console.log(err)
    )
  }
}
