import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  activeC: string = "popular";
  movies: any = [];
  page: number = 1;

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    if (this.activeC == "popular") this.showPopularBtn();
  }

  /* Functions for Popular Movies */
  showPopularBtn() {
    this.movies = [];
    this.activeC = "popular";
    this.getPopular()
  }
  getPopular() {
    this.movieService.getPopularMovie(this.page).subscribe(
      (moviesDB: any) => {
        moviesDB.results.forEach((movie: any, i: number) => {
          if (i < 12) {
            this.movies.push(movie);
          }
          return;
        });
      }
    )
  }

  /* Functions for Top Rated Movies */
  showTopRatedBtn() {
    this.movies = [];
    this.activeC = "top-rated";
    this.getTopRated()
  }
  getTopRated() {
    this.movieService.getTopRatedMovie(this.page).subscribe(
      (moviesDB: any) => {
        moviesDB.results.forEach((movie: any, i: number) => {
          if (i < 12) {
            this.movies.push(movie);
          }
          return;
        });
      }
    )
  }

  /* Functions for Upcoming Movies */
  showUpcomingBtn() {
    this.movies = [];
    this.activeC = "upcoming";
    this.getUpcoming();
  }
  getUpcoming() {
    this.movieService.getUpcomingMovie(this.page).subscribe(
      (moviesDB: any) => {
        moviesDB.results.forEach((movie: any, i: number) => {
          if (i < 12) {
            this.movies.push(movie);
          }
          return;
        });
      }
    )
  }

  loadMore() {
    this.page += 1;
    if (this.activeC == "popular") return this.getPopular();
    if (this.activeC == "top-rated") return this.getTopRated();
    if (this.activeC == "upcoming") return this.getUpcoming();
  }

}
