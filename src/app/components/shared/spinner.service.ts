import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  isFullScreen: boolean = false;
  isLoading: boolean = false;

  constructor() { }

  showFullScreen(){
    this.isFullScreen = true;
  }
  hideFullScreen(){
    this.isFullScreen = false;
  }

  showLoading(){
    this.isLoading = true;
  }
  hideLoading(){
    this.isLoading = false;
  }

}
