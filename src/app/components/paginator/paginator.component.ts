import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokemonService } from 'src/app/service/pokemon.service';
import { PageActions } from 'src/app/state/actions/results.actions';
import { selectPage, selectResults } from '../../state/selectors/results.selectors';
import { ResultsApiActions } from '../../state/actions/results.actions';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit{

  @Output() pageChange: EventEmitter<string>;

  constructor( private service: PokemonService, private store: Store) {
    this.pageChange = new EventEmitter<string>();
  }

  ngOnInit(): void {
    this.store.select(selectResults).subscribe(
      results => {
        this.nextPage = results.next!;
        this.previousPage = results.previous!;
      }
    );
    this.store.select(selectPage).subscribe(
      page => {
        this.page = page;
      }
    )
  }

  page: number = 1;
  nextPage = '';
  previousPage = '';


  first(): void {
    this.service.getResults().subscribe(
      results => {
        this.store.dispatch(ResultsApiActions.loadResults( { results }));
      }
    );
    this.store.dispatch(PageActions.changepage( { page: 1 }));
  }

  next(): void {
    this.pageChange.emit(this.nextPage);
    this.store.dispatch(PageActions.changepage( { page: this.page+1 }  ) );
    
    
  }

  previous(value: string): void {
    this.pageChange.emit(this.previousPage);
    this.store.dispatch(PageActions.changepage( { page: this.page-1 }  ) );
  }


}
