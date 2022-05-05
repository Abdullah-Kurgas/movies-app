import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { SearchedComponent } from './pages/searched/searched.component';
import { VisitedComponent } from './pages/visited/visited.component';

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
