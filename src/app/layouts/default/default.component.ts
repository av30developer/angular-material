import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  sidebarOpened:any=true;
  showMenu: boolean = false;
  showLogin: boolean = false;
  constructor(router:Router) { 
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
          this.showMenu = event.url !== "/";
          this.showLogin = event.url !== "/login";
      }
    });
  }

  ngOnInit(): void {
  }
  toogleSidebar(event:any){
    this.sidebarOpened=!this.sidebarOpened;
  }

}
