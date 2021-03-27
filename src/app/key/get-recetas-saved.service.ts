import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class GetRecetasSavedService {

  constructor(private Http : HttpClient) {

  }
  public URL:string ='http://localhost:4000'
  getRecetasSaved(){
    return this.Http.get(this.URL)
  }
}
