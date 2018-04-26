import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-button',
  templateUrl: './material-button.component.html',
  styleUrls: ['./material-button.component.css']
})
export class MaterialButtonComponent implements OnInit {

  boton = {
    estado: false
  }

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.boton.estado = true;
    }, 3000);

  }

  agregarEstudiante(){
    console.log("Agregando estudiante..")
  }

}
