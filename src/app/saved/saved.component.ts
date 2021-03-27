import { Component, OnInit } from '@angular/core';
import { GetRecetasSavedService } from '../key/get-recetas-saved.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss']
})
export class SavedComponent implements OnInit {

  constructor(public getSaved :GetRecetasSavedService ) { }

  recetas: any = ''
  ngOnInit(): void {
    this.getSaved.getRecetasSaved().subscribe(datos => {
      this.recetas = datos
    })
  }
  toArray(diets: object) {
    return Object.keys(diets).map(
      key => diets[key]
    )
  }

}
