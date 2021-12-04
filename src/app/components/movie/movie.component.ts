import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movies: any;
  visited: any = [];
  imageUrl: string = "https://image.tmdb.org/t/p/w500";
  genres: any;

  constructor(
    private router: Router,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getGenres();
  }

  showMovieDetail(movie: any) {
    this.router.navigateByUrl("/movie-details/" + movie.id);
    this.visited = JSON.parse(localStorage.getItem("visited") || "[]");
    this.visited.push(movie);
    localStorage.setItem("visited", JSON.stringify(this.visited));
  }
  getGenres() {
    this.movieService.getGenre().subscribe(
      genre => {
        this.genres = genre;
      }
    )
  }
}
