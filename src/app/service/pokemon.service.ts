import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Pokemon } from '../interface/pokemon.interface';
import { ResultSearch } from '../interface/resultSearch.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _apiUrl: string = 'https://pokeapi.co/api/v2';
  private _listPokemon: Pokemon[] = [];
  private _next: string = '';
  public get next(): string {
    return this._next;
  }
  private _previous: string = '';
  public get previous(): string {
    return this._previous;
  }
  
  constructor( private http: HttpClient ) {
  }

  get listPokemon(): Pokemon[] {
    return this._listPokemon;
  }

   getListPokemon(): Pokemon[] {
    const url: string = `${ this._apiUrl }/pokemon`;
    return this.getListPokemonByURL( url );
   }

   getListPokemonByURL( url: string ): Pokemon[] {
    this.http.get<ResultSearch>( url ).subscribe(
      (resp) => {
        this._next = resp.next || '';
        this._previous = resp.previous || '';
        for (let r of resp.results) {
          this.http.get<Pokemon>( r.url ).subscribe(
            (pokemon) => {
              this._listPokemon.push(pokemon);
            }
          )
        }
      }
    )

    return this._listPokemon;
   }
}
