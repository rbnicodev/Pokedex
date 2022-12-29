import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';


//ngrx
import { StoreModule } from '@ngrx/store';
import { resultsReducer, pageReducer } from './state/reducers/results.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ListComponent } from './pages/list/list.component';
import { CardComponent } from './components/card/card.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { InfoComponent } from './components/info/info.component';
import { NavComponent } from './shared/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './components/search/search.component';
import { HeadImageComponent } from './components/head-image/head-image.component';
import { PokemonService } from './service/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BottomNavComponent } from './shared/bottom-nav/bottom-nav.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListComponent,
    CardComponent,
    BasicInfoComponent,
    InfoComponent,
    NavComponent,
    SearchComponent,
    HeadImageComponent,
    BottomNavComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    StoreModule.forRoot({ results: resultsReducer, page: pageReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
