import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  language:string = 'en-US';

  constructor(
    private http: HttpClient
  ) { }

  /* Getting for home page */
  getPopularMovie(page: number) {
    return this.http.get(`${environment.apiBaseUrl}/movie/popular?api_key=${environment.apiKey}&language=${this.language}&page=${page}`);
  }
  getTopRatedMovie(page: number) {
    return this.http.get(`${environment.apiBaseUrl}/movie/top_rated?api_key=${environment.apiKey}&language=${this.language}&page=${page}`);
  }
  getUpcomingMovie(page: number) {
    return this.http.get(`${environment.apiBaseUrl}/movie/upcoming?api_key=${environment.apiKey}&language=${this.language}&page=${page}`);
  }


  /* Geting for movie detail */
  getMovieById(id: number) {
    return this.http.get(`${environment.apiBaseUrl}/movie/${id}?api_key=${environment.apiKey}&language=${this.language}&append_to_response=credits`);
  }
  getRecommended(id: number) {
    return this.http.get(`${environment.apiBaseUrl}/movie/${id}/recommendations?api_key=${environment.apiKey}&language=${this.language}&page=1`);
  }
  getSimilar(id: number) {
    return this.http.get(`${environment.apiBaseUrl}/movie/${id}/similar?api_key=${environment.apiKey}&language=${this.language}&page=1`);
  }

  /* Getting for movie card */
  getGenre() {
    return this.http.get(`${environment.apiBaseUrl}/genre/movie/list?api_key=${environment.apiKey}&language=${this.language}`);
  }

  /* Searching for movie & showing in searched page */

  searchMovie(name: string) {
    return this.http.get(`${environment.apiBaseUrl}/search/movie?api_key=${environment.apiKey}&language=${this.language}&query=${name}&page=1`)
  }

}
