import { Component, Input } from '@angular/core';
import { DataPaginator } from 'src/app/interface/data.interface';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
  @Input() data: DataPaginator = {
    next: '',
    previous: ''
  }


  constructor(private service: PokemonService) {
  }

  next(): void {
    this.service.getListPokemonByURL(this.data.next);
  }

  previous(): void {
    this.service.getListPokemonByURL(this.data.previous);
  }


}
