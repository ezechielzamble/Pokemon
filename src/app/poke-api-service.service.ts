import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PokeServiceRes} from './pokemon';
import {PokemonInfo} from './PokemonInfo';

const url = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable({
  providedIn: 'root'
})
export class PokeApiServiceService {

  constructor( private http: HttpClient) { }

  getPokemons(): Observable<PokeServiceRes>{
    return this.http.get<PokeServiceRes>(url);
  }
  getPokemonInfo(id: string): Observable<PokemonInfo> {
    return this.http.get<PokemonInfo>(url + id + '/');
  }
}
