import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-page-movie-profile',
  templateUrl: './page-movie-profile.component.html',
  styleUrls: ['./page-movie-profile.component.css']
})
export class PageMovieProfileComponent implements OnInit {

  movie: Movie = null;

  constructor(
    private route: ActivatedRoute,
    private movies: MoviesService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id
    console.log(id);

    this.movie = this.movies.getMoviesById(id);

  }

}
