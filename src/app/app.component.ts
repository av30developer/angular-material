import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angularmat';
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  // showMenu: boolean = false;
  // showLogin: boolean = false;
  // constructor(router:Router) {
  //   router.events.forEach((event) => {
  //       if(event instanceof NavigationStart) {
  //           this.showMenu = event.url !== "/";
  //           this.showLogin = event.url !== "/login";
  //       }
  //     });
  //   }



}
