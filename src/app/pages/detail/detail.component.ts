import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { tap } from 'rxjs/internal/operators/tap';
import { Pokemon } from 'src/app/interface/pokemon.interface';
import { PokemonService } from 'src/app/service/pokemon.service';
import { selectPokemon } from 'src/app/state/selectors/results.selectors';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(
    private service: PokemonService,
    private activatedRoute: ActivatedRoute, 
    private store: Store
  ) {
    
  }
  pokemon$: Observable<Pokemon> = this.store.select(selectPokemon);
  private _pokemon!: Pokemon;
  get pokemon() { return this._pokemon; }

  ngOnInit(): void {
    this.pokemon$.subscribe(
      pokemon => {
        this._pokemon = pokemon;
      }
    );
  }

}
