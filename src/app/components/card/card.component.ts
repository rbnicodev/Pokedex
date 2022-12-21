import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interface/pokemon.interface';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() name: string = '';
  @Input() pokemon!: Pokemon;

  constructor() {}

  

}
