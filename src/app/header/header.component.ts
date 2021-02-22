import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showFiller = false;
  public content:string = 'Show content';
  public nav:string = 'See more';
  public app_name:string = 'Food App';

  show(){
    this.showFiller = !this.showFiller
    if(this.content == 'Show content'){
      this.content = 'hide content';
    } else{
      this.content = 'Show content';
    }
    return this.content;
  }

  nav_state():string{
    if(this.nav == 'open'){
      this.nav = 'close';
    } else{
      this.nav = 'open';
    }
    return this.nav
  }

}
