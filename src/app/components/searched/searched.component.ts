import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../shared/movie.service';

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
      }
    )
  }

}
