import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
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


  constructor( private _service: PokemonService){
    this._listPokemon = _service.getListPokemon();
  }

  refresh(): void {
    this._listPokemon = this._service.listPokemon;
  }


  listPokemon(): Pokemon[] {
    return this._listPokemon;
  }

  getData(): DataPaginator {
    return {
      next: this._service.next,
      previous: this._service.previous
    }
  }
  
}
