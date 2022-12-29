import { ResultSearch } from "./resultSearch.interface";
import { Observable } from 'rxjs';

export interface AppState {

    results: ResultSearch,
    page: number
}