import { Component, OnInit, Input } from '@angular/core';
import { SaveRecetasService } from '../key/save-recetas.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {

  constructor(private saveService:SaveRecetasService) { }
  @Input() datos;

  ngOnInit(): void {
  }
  saveReceta(){
    this.saveService.saveReceta(this.datos)
  }
}
