import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { DataPaginator } from 'src/app/interface/data.interface';
import { Pokemon } from 'src/app/interface/pokemon.interface';
import { ResultSearch } from 'src/app/interface/resultSearch.interface';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  private _listPokemon: Pokemon[] = [];
  private _dataPaginator: DataPaginator;


  constructor( private _service: PokemonService){
    this._listPokemon = _service.getListPokemon();
    this._dataPaginator = {
      next: this._service.next,
      previous: this._service.previous
    }
  }

  refresh(arg: string): void {
    if (arg === 'next') {
      this.next();
    }
    else {
      this.previous();
    }
  }

  get listPokemon(): Pokemon[] {
    return this._listPokemon;
  }

  get data(): DataPaginator {
    return {
      next: this._service.next,
      previous: this._service.previous
    }
  }

  next(): void {
    this._listPokemon = this._service.getListPokemonByURL( this._service.next );
  }

  previous(): void {
    this._listPokemon = this._service.getListPokemonByURL( this._service.previous );
  }
  
}
