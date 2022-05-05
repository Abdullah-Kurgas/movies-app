import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { SpinnerService } from './components/shared/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public router: Router, public spinnerService: SpinnerService) {
    router.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe(() => {
      spinnerService.showFullScreen();
    });
  }
  
  title = 'movie-project';
}
