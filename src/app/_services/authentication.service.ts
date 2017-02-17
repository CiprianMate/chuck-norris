import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService implements OnInit {

    // change loggedIn to a subject
    private loggedIn: Subject<boolean> = new Subject<boolean>();

    // make isLoggedIn public readonly
    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }

    constructor(private http: Http) {
        this.loggedIn.next(!!localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loggedIn.next(!!localStorage.getItem('currentUser'));
    }

    login(username: string, password: string) {
        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.loggedIn.next(true);
                }
            });
    }



    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}