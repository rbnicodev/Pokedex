import { createActionGroup, props } from '@ngrx/store';
import { ResultSearch } from '../../interface/resultSearch.interface';

export const ResultsApiActions = createActionGroup({
    source: 'Results API',
    events: {
        'Load Results': props<{ results: ResultSearch }>(),
        'Load Page': props<{ results: ResultSearch }>(),
    }
})

export const PageActions = createActionGroup({
    source: 'Page Actions',
    events: {
        'NextPage': props<{ page: number }>(),
        'PreviousPage': props<{ page: number }>()
    }
})