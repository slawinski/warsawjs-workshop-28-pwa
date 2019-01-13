import { Injectable } from '@angular/core';

import MOVIES from 'src/app/movies.json'
import { Movies, Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovies(): Movies {
    return MOVIES;
  }

  getMoviesById(id: any): Movie {
    const movies = this.getMovies();
    return movies.find((movie) => {
      return movie.id === id;
    });
  }
}
