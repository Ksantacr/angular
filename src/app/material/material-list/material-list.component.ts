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
  listaEstudiante: Estudiante[];


  constructor() { }

  ngOnInit() {

    console.log("ngOnInit function");

    this.estudiante1 = {
      id:1,
      nombre: 'Kevin',
      ciudad: 'Guayaquil',
      fotoUrl: 'assets/profile2.png'
    }
    this.estudiante2 = {
      id:2,
      nombre: 'Rafael',
      ciudad: 'Quito',
      fotoUrl: 'assets/profile1.png'
    }
    this.estudiante3 = {
      id:3,
      nombre: 'Santacruz',
      ciudad: 'Cuenca'
    }
    this.listaEstudiante = [this.estudiante1, this.estudiante2, this.estudiante3];
    //this.estudiante4 = new ClassEstudiante(4, 'Kevin', 'Guayaquil')

    setTimeout(() => {
      this.listaEstudiante[2] = {
        id:4,
        nombre: 'Kevin',
        ciudad: 'Nueva Ciudad - EC',
        fotoUrl: 'assets/profile2.png'
      }

      // this.estudiante4.nombre = "Dayi";
      console.log(this.estudiante3.ciudad);
      } , 5000);

  }

}
