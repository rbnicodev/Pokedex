import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataPaginator } from 'src/app/interface/data.interface';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {

  @Input() data!: DataPaginator;
  @Output() pageChange = new EventEmitter<string>();


  constructor(public service: PokemonService) {
  }

  next(): void {
    this.pageChange.emit( 'next' );
    this.service.page += 1;
  }

  previous(): void {
    this.pageChange.emit( 'previous' );
    this.service.page -= 1;
  }


}
