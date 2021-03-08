import { Component, OnInit } from '@angular/core';
import { GethttpService } from '../key/gethttp.service'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private httpService: GethttpService) { }
  public datos_search:any =[]

  ngOnInit(): void {
    console.log('test')
  }
  search($event){
    let search:any = (<HTMLInputElement>document.getElementById('search_input')).value;
    console.log(search)
    this.httpService.get_recetas('/complexSearch/?apiKey=' + this.httpService.key + '&query=' + search)
    .subscribe(datos => {
      console.log(datos)
      datos = this.datos_search
    });;
  }

}
