import { Component, OnInit } from '@angular/core';
import Film from '../models/film.model';
import { FilmService } from '../service/film/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  films: Film[] = [];

  constructor(
    private filmService: FilmService
  ){}

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((films) => { this.films = films })
  }

}
