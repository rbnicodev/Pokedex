import { createFeatureSelector } from '@ngrx/store';
import { Pokemon } from 'src/app/interface/pokemon.interface';
import { ResultSearch } from 'src/app/interface/resultSearch.interface';


export const selectResults = createFeatureSelector<ResultSearch>('results');

export const selectPage = createFeatureSelector<number>('page');

export const selectPokemon = createFeatureSelector<Pokemon>('pokemon');