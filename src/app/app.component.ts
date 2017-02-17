import { Component } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
//import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _opened: boolean = false;

  private _toggleOpened(): void {
    this._opened = !this._opened;
  }


  loggedIn: any;

  constructor(private auth: AuthenticationService, private router: Router) {
    this.loggedIn = this.auth.isLoggedIn;
  }


}




