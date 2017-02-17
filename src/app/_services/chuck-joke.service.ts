import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Joke } from '../common/joke';
import 'rxjs/add/operator/map';



@Injectable()
export class ChuckJokeService {
    constructor(private http: Http) { }
    getNewJoke(): Observable<string> {
        return this.http
            .get(`https://api.chucknorris.io/jokes/random`)
            .map(response =>
                response.json().value
            );
    }
}
