import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../shared/model/estudiante';
import { ClassEstudiante } from '../../shared/model/class-estudiante';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  estudiante1: Estudiante;
  estudiante2: Estudiante;
  estudiante3: Estudiante;
  estudiante4: ClassEstudiante;

  constructor() { }

  ngOnInit() {

    console.log("ngOnInit function");

    this.estudiante1 = {
      id:1,
      nombre: 'Kevin',
      ciudad: 'Guayaquil'
    }
    this.estudiante2 = {
      id:1,
      nombre: 'Kevin',
      ciudad: 'Guayaquil',
      fotoUrl: '//lorempixel.com/200/200'
    }
    this.estudiante3 = {
      id:1,
      nombre: 'Kevin',
      ciudad: 'Guayaquil'
    }
    this.estudiante4 = new ClassEstudiante(4, 'Kevin', 'Guayaquil')

    setTimeout(() => {
      this.estudiante4.nombre = "Dayi";
      console.log(this.estudiante4.getEdad());
    } , 3000);

  }

}
