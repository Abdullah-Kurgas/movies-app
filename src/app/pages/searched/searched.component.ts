import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerService } from 'src/app/components/shared/spinner.service';
import { MovieService } from '../../components/shared/movie.service';

@Component({
  selector: 'app-searched',
  templateUrl: './searched.component.html',
  styleUrls: ['./searched.component.scss']
})
export class SearchedComponent implements OnInit {

  searchedMovies: any;

  constructor(
    private routerA: ActivatedRoute,
    private movieService: MovieService,
    private spinnerService: SpinnerService,
    private router: Router
  ) {
    this.router.events.subscribe(() => this.ngOnInit())
  }

  ngOnInit(): void {
    this.getSearched()
  }

  getSearched() {
    let searchName: any = this.routerA.snapshot.queryParams;

    this.movieService.searchMovie(searchName.name).subscribe(
      movies => {
        this.searchedMovies = movies;

        this.spinnerService.hideFullScreen();
      }
    )
  }

}
