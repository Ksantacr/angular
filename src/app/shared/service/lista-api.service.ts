import { Injectable } from '@angular/core';
import { Personaje } from '../model/personaje';

import { HttpClient } from '@angular/common/http';
import { HttpObserve } from '@angular/common/http/src/client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ListaApiService {

  private readonly URL:string = "https://raw.githubusercontent.com/Ksantacr/api-json-server-test/master/db.json";
  private readonly URL_PERSONAJES: string = "https://raw.githubusercontent.com/Ksantacr/api-json-server-test/master/personajes.json";

  constructor(private http:HttpClient) {
  }

  getJson():Observable<any>{
    return this.http.get<any>(this.URL);
  }

  getApiPersonajes():Observable<Array<Personaje>>{
    return this.http.get<Array<Personaje>>(this.URL_PERSONAJES);
  }
}