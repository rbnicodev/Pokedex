import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { selectPage, selectResults } from 'src/app/state/selectors/results.selectors';
import { PokemonService } from 'src/app/service/pokemon.service';
import { ResultsApiActions } from 'src/app/state/actions/results.actions';
import { Result, ResultSearch } from 'src/app/interface/resultSearch.interface';
import { Pokemon } from 'src/app/interface/pokemon.interface';
import { PageActions } from '../../state/actions/results.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{


  results$: Observable<ResultSearch> = this.store.select(selectResults);
  listPokemons: Pokemon[] = [];



  constructor( private service: PokemonService, private store: Store){
  }

  ngOnInit(): void {
    this.results$.subscribe(
      results => {
        this.listPokemons = [];
        for (let result of results.results) {
          this.service.getListPokemonByURL(result.url).subscribe(
            pokemon => {
              this.listPokemons.push(pokemon);
            }
          )
        }
      }
    )
  }


  onPageChange(url: string) {
    this.service.getResults( url ).subscribe(
      results => {
        this.listPokemons = [];
        this.store.dispatch( ResultsApiActions.loadResults( { results }));
      }
    );
  }

  get listPokemon(): Pokemon[] {
    return this.listPokemons.sort((a, b) => a.id - b.id);
  }
  
}
