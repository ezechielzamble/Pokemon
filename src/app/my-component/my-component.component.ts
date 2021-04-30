import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';
import {PokeApiServiceService} from '../poke-api-service.service';
import {PokemonInfo} from '../PokemonInfo';
import {PokeShareInfoService} from '../poke-share-info.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeApiServiceService]
})
export class MyComponentComponent implements OnInit {

    id: string;
    selectedPokeId: string;
    searchPokeName: string = '';
    pokes: Pokemon[] = [];
    pokeInfo: PokemonInfo;
  constructor(private pokeService: PokeApiServiceService, private pokeShareInfoService: PokeShareInfoService) {
    // this.pokes.push(new Pokemon('1', 'Pikachu'));
    // this.pokes.push(new Pokemon('2', 'Boubou'));
    // this.pokes.push(new Pokemon('3', 'Sangohan'));
    // this.pokes.push(new Pokemon('4', 'Sangoku'));
    // this.pokes.push(new Pokemon('5', 'Freezer'));
  }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {
      data.results.forEach((e, index) => {
        // @ts-ignore
        this.pokes.push(new Pokemon(index + 1, e.name, e.url));
      });
     // console.log(data)
    });
  }

  getPokemonSelectedInfo(){
    if (this.selectedPokeId != '') {
      this.pokeService.getPokemonInfo(this.selectedPokeId).subscribe(data =>
        this.pokeInfo = data);
      this.pokeShareInfoService.setValue(this.selectedPokeId);
      }
    }
  }
