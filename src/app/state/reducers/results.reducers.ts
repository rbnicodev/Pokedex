import { createReducer, on } from '@ngrx/store';
import { ResultSearch } from 'src/app/interface/resultSearch.interface';
import { PageActions, ResultsApiActions, PokemonActions } from '../actions/results.actions';
import { Pokemon } from '../../interface/pokemon.interface';



export const initialState : ResultSearch = {
    count:    0,
    next:     '',
    previous: '',
    results:  []
}

export const initialPage : number = 1;

export const initPokemon: Pokemon = {
    id: 0,
    name: ''
};

export const resultsReducer = createReducer(
    initialState,
    on(ResultsApiActions.loadResults, (_state, { results }) => results),
)

export const pageReducer = createReducer(
    initialPage,
    on(PageActions.nextpage, (_state, { page } ) => page),
    on(PageActions.previouspage, (_state, { page } ) => page)
)

export const pokemonReducer = createReducer(
    initPokemon,
    on(PokemonActions.setPokemon, (_state, { pokemon }) => pokemon)
)