import { Component, OnInit } from '@angular/core';

import { ListaApiService } from '../shared/service/lista-api.service';
import { Personaje } from '../shared/model/personaje';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  personaje: Personaje;
  listaPersonajes: Array<Personaje>;

  constructor(private listaApiService: ListaApiService) {
    this.personaje = this.listaApiService.getPersonaje();
    this.listaPersonajes = this.listaApiService.getListaPersonaje();

  }

  ngOnInit() {
    
  }

}