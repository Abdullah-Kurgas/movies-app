import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

  /* Getting for home page */
  getPopularMovie(page: number) {
    return this.http.get(environment.serverUrl + `/3/movie/popular?api_key=9b140afc6eba9d789da443808fbbc6fb&language=en-US&page=${page}`);
  }
  getTopRatedMovie(page: number) {
    return this.http.get(environment.serverUrl + `/3/movie/top_rated?api_key=9b140afc6eba9d789da443808fbbc6fb&language=en-US&page=${page}`);
  }
  getUpcomingMovie(page: number) {
    return this.http.get(environment.serverUrl + `/3/movie/upcoming?api_key=9b140afc6eba9d789da443808fbbc6fb&language=en-US&page=${page}`);
  }


  /* Geting for movie detail */
  getMovieById(id: number) {
    return this.http.get(environment.serverUrl + `/3/movie/${id}?api_key=9b140afc6eba9d789da443808fbbc6fb&language=en-US&append_to_response=credits`);
  }
  getRecommended(id: number) {
    return this.http.get(environment.serverUrl + `/3/movie/${id}/recommendations?api_key=9b140afc6eba9d789da443808fbbc6fb&language=en-US&page=1`);
  }
  getSimilar(id: number) {
    return this.http.get(environment.serverUrl + `/3/movie/${id}/similar?api_key=9b140afc6eba9d789da443808fbbc6fb&language=en-US&page=1`);
  }

  /* Getting for movie card */
  getGenre() {
    return this.http.get(environment.serverUrl + "/3/genre/movie/list?api_key=9b140afc6eba9d789da443808fbbc6fb&language=en-US");
  }

  /* Searching for movie & showing in searched page */

  searchMovie(name: string) {
    return this.http.get(environment.serverUrl + `/3/search/movie?api_key=9b140afc6eba9d789da443808fbbc6fb&language=en-US&query=${name}&page=1`)
  }

}
