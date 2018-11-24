import { Component, ViewChild } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { MatMenuTrigger } from '@angular/material/menu';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  events: string[] = [];
  opened: boolean;

  title = 'Mon CV';

  constructor() { }

  someMethod() {
    this.trigger.openMenu();
  }
}
