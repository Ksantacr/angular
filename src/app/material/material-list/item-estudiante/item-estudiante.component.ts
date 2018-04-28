import { Component, OnInit, Input, Output } from '@angular/core';
import { Estudiante } from '../../../shared/model/estudiante';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-item-estudiante',
  templateUrl: './item-estudiante.component.html',
  styleUrls: ['./item-estudiante.component.css']
})
export class ItemEstudianteComponent implements OnInit {

  readonly DEFAULT_PICTURE = "assets/profile.png";
  @Input()
  estudiante: Estudiante;

  // @Output()
  // onMouseClick = new EventEmitter<Estudiante>();

  click(e: Estudiante){
    //this.onMouseClick.emit(e);
    console.log(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
