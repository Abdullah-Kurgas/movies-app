import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  searchName: string = "";
  searchedMovies: any;
  shown: boolean = false;
  imageUrl: string = "https://image.tmdb.org/t/p/w500";
  genres: any;
  visited: any = [];

  constructor(
    private router: Router,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getGenres()
  }

  searchMovie() {
    if (this.searchName == "") return;
    this.router.navigate(["/searched"], { queryParams: { name: this.searchName } });
  }

  sensSearch(e: any) {

    if (e.keyCode == 13) {
      this.shown = false;
      return;
    };
    if (this.searchName == "") {
      this.shown = false;
      return;
    };

    this.movieService.searchMovie(this.searchName).subscribe(
      movies => {
        this.searchedMovies = movies;
        this.shown = true;
      }
    )
  }
  showMovieDetail(movie: any) {
    this.router.navigateByUrl("/movie-details/" + movie.id);
    this.visited = JSON.parse(localStorage.getItem("visited") || "[]");
    this.visited.push(movie);
    localStorage.setItem("visited", JSON.stringify(this.visited));

    this.shown = false;
    this.searchName = "";
  }

  getGenres() {
    this.movieService.getGenre().subscribe(
      genre => {
        this.genres = genre;
      }
    )
  }

}
