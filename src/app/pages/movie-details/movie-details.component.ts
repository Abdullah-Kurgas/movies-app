import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AlertComponent } from 'src/app/components/modals/alert/alert.component';
import { SpinnerService } from 'src/app/components/shared/spinner.service';
import { environment } from 'src/environments/environment.prod';
import { MovieService } from '../../components/shared/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent {
  rating: number = Math.round(3);
  id!: number;
  movie!: any;
  recommendedM: any;
  similarM: any;
  favorites: any = [];
  localFavorites: any = JSON.parse(localStorage.getItem('favorites') || '[]');

  environment = environment;

  constructor(
    private activatedRouter: ActivatedRoute,
    private movieService: MovieService,
    private spinnerService: SpinnerService,
    private router: Router,
    public modal: MatDialog
  ) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.id = this.activatedRouter.snapshot.params['id'];
        this.getMovieById();
      });
  }

  getMovieById() {
    this.spinnerService.showFullScreen();
    this.movieService.getMovieById(this.id).subscribe((movie) => {
      this.movie = movie;
      this.localFavorites.forEach((favorite: any) => {
        if (this.movie.id == favorite.id) {
          this.movie.favorite = favorite.favorite;
        }
      });
      this.getRecommended();
    });
  }

  /* Getting recommended and similar */
  getRecommended() {
    this.movieService.getRecommended(this.id).subscribe((recommended) => {
      this.recommendedM = recommended;
      this.getSimilar();
    });
  }
  getSimilar() {
    this.movieService.getSimilar(this.id).subscribe((similar) => {
      this.similarM = similar;
      console.log('test');

      this.spinnerService.hideFullScreen();
    });
  }

  /* Saving movie to favorite */
  saveFavorite() {
    this.modal
      .open(AlertComponent, { data: this.movie.favorite })
      .afterClosed()
      .subscribe((data) => {
        if (!data?.type) return;

        if (!data.data) {
          this.movie.favorite = true;

          this.localFavorites.push(this.movie);
          localStorage.setItem('favorites', JSON.stringify(this.localFavorites));
          
        } else {
          this.movie.favorite = false;
          this.localFavorites.forEach((favorite: any, i: number) => {
            if (this.movie.id == favorite.id) {
              this.localFavorites.splice(i, 1);
              localStorage.setItem(
                'favorites',
                JSON.stringify(this.localFavorites)
              );
            }
          });
        }
      });
  }
}
