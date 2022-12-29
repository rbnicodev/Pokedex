import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Store } from '@ngrx/store';
import { DataPaginator } from 'src/app/interface/data.interface';
import { PokemonService } from 'src/app/service/pokemon.service';
import { selectPage, selectResults } from '../../state/selectors/results.selectors';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit{

  @Output('pageChange') pageChange = new EventEmitter<string>();

  constructor( private service: PokemonService, private store: Store) {
  }

  ngOnInit(): void {
    this.store.select(selectResults).subscribe(
      results => {
        this.nextPage = results.next;
        this.previousPage = results.previous;
      }
    );
    this.store.select(selectPage).subscribe(
      page => {
        this.page = page;
      }
    )
  }

  page = 1;
  nextPage = '';
  previousPage = '';

  next(value: string): void {
    this.pageChange.emit(value);
  }

  previous(value: string): void {
    this.pageChange.emit(value);
  }


}
