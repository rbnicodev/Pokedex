import { Component, Input } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {


  @Input() name: string = '';

  constructor( public service: PokemonService ) {}


  home():void {
    this.service.title = 'Pokédex';
  }
}
