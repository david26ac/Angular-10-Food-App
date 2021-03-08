import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GethttpService {

  constructor(private http: HttpClient) { }

  private url:string = 'https://api.spoonacular.com/recipes'
  public results:Observable<any>;
  public key:string = '574d6909c4ad48199d9c03653cfd049f'
  get_recetas(plus){
    return this.http.get(this.url + plus);
  }
}
