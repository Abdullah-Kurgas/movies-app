import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visited',
  templateUrl: './visited.component.html',
  styleUrls: ['./visited.component.scss']
})
export class VisitedComponent implements OnInit {

  visited: any;

  constructor() { }

  ngOnInit(): void {
    this.visited = JSON.parse(localStorage.getItem("visited") || "[]");
  }

  clearHistory() {
    localStorage.removeItem("visited");
    this.ngOnInit();
  }

}
