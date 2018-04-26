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
      fotoUrl: 'https://avatarfiles.alphacoders.com/715/71560.jpg'
    }
    this.estudiante2 = {
      id:1,
      nombre: 'Kevin',
      ciudad: 'Guayaquil',
      fotoUrl: 'https://i.pinimg.com/736x/4e/d3/13/4ed313dfb6326a990da7a2e013a3cefc.jpg'
    }
    this.estudiante3 = {
      id:1,
      nombre: 'Kevin',
      ciudad: 'Guayaquil'
    }
    this.listaEstudiante = [this.estudiante1, this.estudiante2, this.estudiante3];
    //this.estudiante4 = new ClassEstudiante(4, 'Kevin', 'Guayaquil')

    setTimeout(() => {
      this.listaEstudiante[2] = {
        id:2,
        nombre: 'Kevin',
        ciudad: 'Nueva Ciudad - EC',
        fotoUrl: 'https://avatarfiles.alphacoders.com/752/75205.png'
      }

      // this.estudiante4.nombre = "Dayi";
      console.log(this.estudiante3.ciudad);
      } , 3000);

  }

}
