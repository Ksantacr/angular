import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit {

  persona = {
    nombre: "Kevin Santacruz"
  }
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.persona.nombre = "Rafael Burgos"
    }, 3000);
  }

}
