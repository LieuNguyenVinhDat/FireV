import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FireV';
  currentRoute$: Observable<any> = this.router.events.pipe(filter(event => event instanceof NavigationEnd));

  constructor(public router: Router) {
    this.currentRoute$.subscribe(value => {
      // console.log(value);
    })
  }
}
