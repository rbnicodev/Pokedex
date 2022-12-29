import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Pokemon } from '../../interface/pokemon.interface';
import { PokemonService } from '../../service/pokemon.service';
import { Result } from '../../interface/resultSearch.interface';
import { Store } from '@ngrx/store';
import { PokemonActions } from 'src/app/state/actions/results.actions';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input() name: string = '';
  @Input() pokemon!: Pokemon;

  constructor( private service: PokemonService, private store: Store) {}

  ngOnInit(): void {
  }

  verPokemon() {
    this.store.dispatch(PokemonActions.setPokemon( { pokemon: this.pokemon }));
    this.service.title = this.pokemon.name;
    console.log();
  }

}
