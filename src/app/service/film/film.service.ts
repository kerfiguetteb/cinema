import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Film from 'src/app/models/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private apiUrl = '/films';

  constructor(private http: HttpClient) { }
  
  getFilms(): Observable<Film[]>{
    return this.http.get<Film[]>(this.apiUrl);

   }

  getFilm(id: number): Observable<Film>{
    return this.http.get<Film>(`${this.apiUrl}/${id}`)
  }
}
