import { Component, OnInit } from '@angular/core';
import { GethttpService } from '../key/gethttp.service'
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})
export class RecetasComponent implements OnInit {

  constructor(private httpService : GethttpService) {

  }
  recetas: any = ''
  name:string=''
  ngOnInit(): any {
    this.get_recetas();
  }
  get_recetas(){
    let url:string = '/random/?apiKey=' + this.httpService.key + '&number=8'
    this.httpService.get_recetas(url).subscribe(datos => {
      this.recetas = datos;
      this.recetas = this.recetas.recipes;
      console.log(this.recetas)
    });;
  }
  toArray(diets: object) {
    return Object.keys(diets).map(
      key => diets[key]
    )
  }

}
