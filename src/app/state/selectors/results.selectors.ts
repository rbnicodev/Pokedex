import { createFeatureSelector } from '@ngrx/store';
import { ResultSearch } from 'src/app/interface/resultSearch.interface';


export const selectResults = createFeatureSelector<ResultSearch>('results');

export const selectPage = createFeatureSelector<number>('page');