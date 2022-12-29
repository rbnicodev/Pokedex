import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectResults } from './state/selectors/results.selectors';
import { ResultsApiActions } from './state/actions/results.actions';
import { PokemonService } from './service/pokemon.service';
import { ResultSearch } from './interface/resultSearch.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Pokedex';
  


  constructor( private service: PokemonService, private store: Store) {
    
  }

  onNext(url: string) {
    this.service.getResults( url ).subscribe(
      results => {
        this.store.dispatch( ResultsApiActions.loadPage( { results }));
      }
    )
  }

  ngOnInit(): void {
    this.service.getResults().subscribe(
      results => {
        this.store.dispatch( ResultsApiActions.loadResults( { results }));
      }
    )
  }

  
}
