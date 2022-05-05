import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/components/shared/spinner.service';
import { MovieService } from '../../components/shared/movie.service';

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
    private movieService: MovieService,
    public spinnerService: SpinnerService
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
    this.spinnerService.showLoading();
    this.movieService.getPopularMovie(this.page).subscribe(
      (moviesDB: any) => {
        moviesDB.results.forEach((movie: any, i: number) => {
          if (i < 12) {
            this.movies.push(movie);
          }

          this.spinnerService.hideLoading();
          this.spinnerService.hideFullScreen();
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
    this.spinnerService.showLoading();
    this.movieService.getTopRatedMovie(this.page).subscribe(
      (moviesDB: any) => {
        moviesDB.results.forEach((movie: any, i: number) => {
          if (i < 12) {
            this.movies.push(movie);
          }
          this.spinnerService.hideLoading();
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
    this.spinnerService.showLoading();
    this.movieService.getUpcomingMovie(this.page).subscribe(
      (moviesDB: any) => {
        moviesDB.results.forEach((movie: any, i: number) => {
          if (i < 12) {
            this.movies.push(movie);
          }
          this.spinnerService.hideLoading();
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
