import { Component, OnInit, Input } from '@angular/core';
import { Estudiante } from '../../../shared/model/estudiante';

@Component({
  selector: 'app-item-estudiante',
  templateUrl: './item-estudiante.component.html',
  styleUrls: ['./item-estudiante.component.css']
})
export class ItemEstudianteComponent implements OnInit {

  readonly DEFAULT_PICTURE = "assets/profile.png";
  @Input()
  estudiante: Estudiante;
  constructor() { }

  ngOnInit() {
  }

}
