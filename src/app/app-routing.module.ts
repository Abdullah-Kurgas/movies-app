import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SearchedComponent } from './components/searched/searched.component';
import { VisitedComponent } from './components/visited/visited.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "favorites", component: FavoritesComponent },
  { path: "visited", component: VisitedComponent },
  { path: "movie-details/:id", component: MovieDetailsComponent },
  { path: "searched", component: SearchedComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
