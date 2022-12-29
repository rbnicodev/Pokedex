import { Component, EventEmitter, OnInit } from '@angular/core';
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


  results$ : Observable<ResultSearch> = this.store.select(selectResults);
  listResults: Result[] = [];
  listPokemons: Pokemon[] = [];



  constructor( private service: PokemonService, private store: Store){
  }

  ngOnInit(): void {
    this.service.getResults().subscribe(
      results => {
        this.store.dispatch( ResultsApiActions.loadResults( { results }));
        this.listResults = results.results;
        for (let result of results.results ) {
          this.service.getListPokemonByURL( result.url ).subscribe(
            pokemon => {
              this.listPokemons.push( pokemon );
            }
          )
        }
      }
    );
  }


  onPageChange(url: string) {
    console.log('hola');
    this.service.getResults( url ).subscribe(
      results => {
        this.store.dispatch( ResultsApiActions.loadResults( { results }));
        this.listResults = results.results;
        for (let result of results.results ) {
          this.service.getListPokemonByURL( result.url ).subscribe(
            pokemon => {
              this.listPokemons.push( pokemon );
            }
          )
        }
      }
    );
  }

  get listPokemon(): Pokemon[] {
    return this.listPokemons.sort((a, b) => a.id - b.id);
  }
  
}
