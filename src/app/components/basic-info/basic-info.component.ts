import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interface/pokemon.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectPokemon } from 'src/app/state/selectors/results.selectors';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit{
  private pokemon$: Observable<Pokemon> = this.store.select(selectPokemon);
  private _pokemon: Pokemon = {
    id: 0,
    name: ''
  }


  constructor(private store: Store) {

  }

  ngOnInit(): void {
    this.pokemon$.subscribe(
      pokemon => {
        this._pokemon = pokemon;
      }
    );
  }


  get pokemon(): Pokemon {
    return this._pokemon;
  }
}
