import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../components/shared/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  rating: number = Math.round(3);
  id!: number;
  movie!: any;
  imageUrl: string = 'https://image.tmdb.org/t/p/w500';
  recommendedM: any;
  similarM: any;
  favorites: any = [];
  localFavorites: any = JSON.parse(localStorage.getItem("favorites") || "[]");

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {
    this.router.events.subscribe(() => this.ngOnInit())
  }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params['id'];
    this.getMovieById();
    this.getRecommended();
    this.getSimilar();
  }

  getMovieById() {
    this.movieService.getMovieById(this.id).subscribe(
      movie => {
        this.movie = movie;
        this.localFavorites.forEach((favorite: any) => {
          if (this.movie.id == favorite.id) {
            this.movie.favorite = favorite.favorite;
          }
        });
      }
    )
  }

  /* Getting recommended and similar */
  getRecommended() {
    this.movieService.getRecommended(this.id).subscribe(
      recommended => {
        this.recommendedM = recommended;
      }
    )
  }
  getSimilar() {
    this.movieService.getSimilar(this.id).subscribe(
      similar => {
        this.similarM = similar;
      }
    )
  }

  /* Saving movie to favorite */
  saveFavorite() {
    if (this.movie.favorite) {
      if (confirm("The movie will be removed from favorites?")) {
        this.movie.favorite = false;
        this.localFavorites.forEach((favorite: any, i: number) => {
          if (this.movie.id == favorite.id) {
            this.localFavorites.splice(i, 1);
            localStorage.setItem("favorites", JSON.stringify(this.localFavorites));

          }
        });
      }
    } else {
      if (confirm("Add to favorites?")) {
        this.movie.favorite = true;

        this.localFavorites.push(this.movie);
        localStorage.setItem("favorites", JSON.stringify(this.localFavorites));

        this.ngOnInit();
      }
    }
  }

}
