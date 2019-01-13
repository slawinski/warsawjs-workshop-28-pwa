import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {

  @Input() movie: Movie = null;

  constructor() { }

  ngOnInit() {
  }

}
