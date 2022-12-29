//3os
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


//ngrx
import { StoreModule } from '@ngrx/store';
import { resultsReducer, pageReducer } from './state/reducers/results.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

//propios
import { BottomNavComponent } from './shared/bottom-nav/bottom-nav.component';
import { PokemonService } from './service/pokemon.service';
import { HeadImageComponent } from './components/head-image/head-image.component';
import { SearchComponent } from './components/search/search.component';
import { NavComponent } from './shared/nav/nav.component';
import { InfoComponent } from './components/info/info.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './pages/list/list.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { DetailComponent } from './pages/detail/detail.component';



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
