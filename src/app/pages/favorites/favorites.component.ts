import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/components/shared/spinner.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favorites: any;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    setTimeout(()=>{
      this.spinnerService.hideFullScreen();
    },0)
  }

}
