import { Component, OnInit } from '@angular/core';
import { GethttpService } from '../key/gethttp.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private httpService: GethttpService) { }
  public datos_search;
  not_found:boolean = false;

  ngOnInit(): void {
    console.log('test')
  }
  search($event){
    let search:any = (<HTMLInputElement>document.getElementById('search_input')).value;
    console.log(search)
    this.httpService.get_recetas('/complexSearch/?apiKey=' + this.httpService.key + '&query=' + search)
    .subscribe(datos => {

      this.datos_search = datos['results'];
      console.log(this.datos_search)
      if(this.datos_search.length < 1){
        this.not_found = true
        console.log(this.not_found)

      }else{
        this.not_found = false
        console.log(this.not_found)
      }
    });;
  }

}
