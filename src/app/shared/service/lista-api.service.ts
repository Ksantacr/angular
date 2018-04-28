import { Injectable } from '@angular/core';
import { Personaje } from '../model/personaje';

@Injectable()
export class ListaApiService {

  private readonly DATA:Personaje = {
    nombre: 'Kevin Santacruz',
    fecha: '2018-05-01',
    fotoPerfil: 'assets/profile2.png',
    fotoDestacada : 'assets/profile1.png',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nobis eos, aut ullam ratione a nesciunt quas dolores, inventore consequuntur totam quia molestiae adipisci voluptas consequatur, aliquid illo nam sunt.'
  }
  listaPersonajes:Array<Personaje> = [
    {
      nombre: 'Kevin Santacruz',
      fecha: '2018-05-01',
      fotoPerfil: 'assets/profile2.png',
      fotoDestacada : 'assets/profile1.png',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nobis eos, aut ullam ratione a nesciunt quas dolores, inventore consequuntur totam quia molestiae adipisci voluptas consequatur, aliquid illo nam sunt.'
    },
    {
      nombre: 'Tamara Santacruz',
      fecha: '2018-05-02',
      fotoPerfil: 'assets/profile2.png',
      fotoDestacada : 'assets/profile1.png',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nobis eos, aut ullam ratione a nesciunt quas dolores, inventore consequuntur totam quia molestiae adipisci voluptas consequatur, aliquid illo nam sunt.'
    },
    {
      nombre: 'Mayiya Burgos',
      fecha: '2018-05-03',
      fotoPerfil: 'assets/profile2.png',
      fotoDestacada : 'assets/profile1.png',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nobis eos, aut ullam ratione a nesciunt quas dolores, inventore consequuntur totam quia molestiae adipisci voluptas consequatur, aliquid illo nam sunt.'
    },
    {
      nombre: 'Robinson Santacruz',
      fecha: '2018-05-04',
      fotoPerfil: 'assets/profile2.png',
      fotoDestacada : 'assets/profile1.png',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nobis eos, aut ullam ratione a nesciunt quas dolores, inventore consequuntur totam quia molestiae adipisci voluptas consequatur, aliquid illo nam sunt.'
    },
    {
      nombre: 'Rafael Burgos',
      fecha: '2018-05-06',
      fotoPerfil: 'assets/profile2.png',
      fotoDestacada : 'assets/profile1.png',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nobis eos, aut ullam ratione a nesciunt quas dolores, inventore consequuntur totam quia molestiae adipisci voluptas consequatur, aliquid illo nam sunt.'
    },
    {
      nombre: 'Rafael Burgos',
      fecha: '2018-05-07',
      fotoPerfil: 'assets/profile2.png',
      fotoDestacada : 'assets/profile1.png',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nobis eos, aut ullam ratione a nesciunt quas dolores, inventore consequuntur totam quia molestiae adipisci voluptas consequatur, aliquid illo nam sunt.'
    }


  ];

  constructor() { }

  getPersonaje():Personaje{
    return this.DATA;
  }
  getListaPersonaje():Array<Personaje>{
    return this.listaPersonajes;
  }

}