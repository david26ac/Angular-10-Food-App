import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GethttpService } from '../gethttp.service'


@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.scss']
})
export class VerComponent implements OnInit {

  id:any;
  datos_recetas: any = ''
  constructor(private route: ActivatedRoute, private htttpService: GethttpService) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.see(this.id);
  }
  see(id){
    this.htttpService.get_recetas('/' + id + '/information/?apiKey=574d6909c4ad48199d9c03653cfd049f')
    .subscribe(datos => {
      this.datos_recetas = datos;
      console.log(this.datos_recetas)
    });;
  }
  toArray(diets: object) {
    return Object.keys(diets).map(
      key => diets[key]
    )
  }



}
