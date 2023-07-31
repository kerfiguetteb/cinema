import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';
import { FilmsComponent } from './films/films.component';
import { ListComponent } from './films/list/list.component';
import { CardComponent } from './films/card/card.component';
import { HomeComponent } from './home/home.component';
import { ShowComponent } from './films/show/show.component';
import { FilmComponent } from './films/show/film/film.component';
import { NoFoundComponent } from './commons/no-found/no-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FilmsComponent,
    ListComponent,
    CardComponent,
    HomeComponent,
    ShowComponent,
    FilmComponent,
    NoFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
