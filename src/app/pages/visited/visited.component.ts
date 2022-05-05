import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/components/shared/spinner.service';

@Component({
  selector: 'app-visited',
  templateUrl: './visited.component.html',
  styleUrls: ['./visited.component.scss'],
})
export class VisitedComponent implements OnInit {
  visited: any;

  constructor(public spinnerService: SpinnerService) {}

  ngOnInit(): void {
    this.visited = this.getVisitedMovies();

    setTimeout(() => {
      this.spinnerService.hideFullScreen();
    }, 0);
  }

  clearHistory() {
    this.spinnerService.showLoading();

    setTimeout(() => {
      localStorage.removeItem('visited');

      this.visited = this.getVisitedMovies();
      this.spinnerService.hideLoading();
    }, 1000);
  }

  getVisitedMovies() {
    return JSON.parse(localStorage.getItem('visited') || '[]');
  }
}
