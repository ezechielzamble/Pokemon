import {Component, Input, OnInit} from '@angular/core';
import {PokemonInfo} from '../PokemonInfo';
import {PokeShareInfoService} from '../poke-share-info.service';

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.css']
})
export class PokedetailComponent implements OnInit {

  @Input('detail')
  detail: PokemonInfo;

  constructor(private pokeShareInfoService: PokeShareInfoService) {
    this.pokeShareInfoService.getObservable().subscribe(e => console.log('e ' + e));
  }

  ngOnInit(): void {
  }

}
