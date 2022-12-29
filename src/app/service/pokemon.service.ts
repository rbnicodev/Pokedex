import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Pokemon } from '../interface/pokemon.interface';
import { ResultSearch } from '../interface/resultSearch.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _page: number = 1;
  public get page(): number {
    return this._page;
  }
  public set page(value: number) {
    this._page = value;
  }
  private _apiUrl: string = 'https://pokeapi.co/api/v2';
  private _next: string = '';
  private _title: string = 'Pokédex';
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }
  public get next(): string {
    return this._next;
  }
  private _previous: string = '';
  public get previous(): string {
    return this._previous;
  }


  
  
  constructor( private http: HttpClient ) {
  }



  getResults( url: string = `${ this._apiUrl }/pokemon`) :Observable<ResultSearch> {
    return this.http.get<ResultSearch>( url );
  }


   getListPokemonByURL( url: string ): Observable<Pokemon> {
    return this.http.get<Pokemon>( url );
   }

   getPokemonByID( id: string ): Observable<Pokemon> {
    const url: string = `${ this._apiUrl }/pokemon/${ id }`;
    let output: Pokemon[] = [];
    return this.http.get<Pokemon>( url );
   }
}
