import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../interface/pokemon.interface';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input() name: string = '';
  @Input() pokemon!: Pokemon;

  constructor( private service: PokemonService) {}

  ngOnInit(): void {
  }

  verPokemon() {
    this.service.title = this.pokemon.name;
    console.log();
  }

}
