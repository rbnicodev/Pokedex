import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/interface/pokemon.interface';
import { selectPokemon } from 'src/app/state/selectors/results.selectors';

@Component({
  selector: 'app-head-image',
  templateUrl: './head-image.component.html',
  styleUrls: ['./head-image.component.css']
})
export class HeadImageComponent {

  private pokemon$: Observable<Pokemon> = this.store.select(selectPokemon);
  private _pokemon: Pokemon = {
    id: 0,
    name: ''
  }

  constructor(private store: Store) {}

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
