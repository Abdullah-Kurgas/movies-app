import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { VisitedComponent } from './pages/visited/visited.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { SearchedComponent } from './pages/searched/searched.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AlertComponent } from './components/modals/alert/alert.component';

import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    FavoritesComponent,
    VisitedComponent,
    MovieComponent,
    MovieDetailsComponent,
    SearchedComponent,
    SpinnerComponent,
    AlertComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
