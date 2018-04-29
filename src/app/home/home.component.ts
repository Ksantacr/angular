import { Component, OnInit } from '@angular/core';

import { ListaApiService } from '../shared/service/lista-api.service';
import { Personaje } from '../shared/model/personaje';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  readonly DEFAUL_PICTURE:string = "https://yt3.ggpht.com/a-/AJLlDp1wqoHl_4lYD7G-If6NmIFF8-D1ONXKHabckA=s900-mo-c-c0xffffffff-rj-k-no";
  listaPersonajes: Array<Personaje>;

  constructor(private listaApiService: ListaApiService) {
  }

  ngOnInit() {
    this.listaApiService.getApiPersonajes().subscribe((data:Array<Personaje>) => {
      this.listaPersonajes = data;
    });

    
  }

}