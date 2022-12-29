import { createReducer, on } from '@ngrx/store';
import { ResultSearch } from 'src/app/interface/resultSearch.interface';
import { PageActions, ResultsApiActions } from '../actions/results.actions';



export const initialState : ResultSearch = {
    count:    0,
    next:     '',
    previous: '',
    results:  []
}

export const initialPage : number = 1;

export const resultsReducer = createReducer(
    initialState,
    on(ResultsApiActions.loadResults, (_state, { results }) => results),
)

export const pageReducer = createReducer(
    initialPage,
    on(PageActions.changepage, (_state, { page } ) => page),
)