import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Film from 'src/app/models/film.model';
import { FilmService } from 'src/app/service/film/film.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  detail!: Film;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private filmService: FilmService
  ){}

  private subscribeFilm(id: number): void {
    this.filmService.getFilm(id).subscribe((film)=>{
      this.detail = film
    })
  }

  private setSubscribe(type: string | null, id: string | null): void {
     if (id && type === 'films') {
      this.subscribeFilm(+id);
    } else if (!id || !type) {
      this.router.navigate(['/not-found']);
    }
  }
  ngOnInit(){
    const type = this.route.snapshot.paramMap.get('type');
    const id = this.route.snapshot.paramMap.get('id');

    this.setSubscribe(type, id);
  }

}
