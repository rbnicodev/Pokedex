import { ResultSearch } from "./resultSearch.interface";
import { Pokemon } from './pokemon.interface';

export interface AppState {

    results: ResultSearch,
    pokemon: Pokemon,
    page: number
}