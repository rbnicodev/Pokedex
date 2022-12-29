import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/interface/pokemon.interface';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(
    private service: PokemonService, private activatedRoute: ActivatedRoute, 
  ) {
    
  }

  private _pokemon!: Pokemon;
  get pokemon() { return this._pokemon; }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      ({id}) => {
        this.service.getPokemonByID( id ).subscribe(
          (resp) => {
            this._pokemon = resp;
          }
        )
      }
    )
  }

}
