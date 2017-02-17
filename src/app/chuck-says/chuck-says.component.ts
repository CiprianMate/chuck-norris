import { Component, OnInit } from '@angular/core';
import { ChuckJokeService } from '../_services/chuck-joke.service';
import { Joke } from '../common/joke';
import { Observable } from 'rxjs/Observable';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

@Component({
  selector: 'app-chuck-says',
  templateUrl: './chuck-says.component.html',
  styleUrls: ['./chuck-says.component.css']
})
export class ChuckSaysComponent implements OnInit {

  joke: string;

  constructor(private chuckJokeService: ChuckJokeService) { }

  ngOnInit() {

    this.chuckJokeService.getNewJoke().subscribe(joke => this.joke = joke);

    IntervalObservable
      .create(1000)
      .flatMap(() => {
        return this.chuckJokeService.getNewJoke();
      }).subscribe(
      data => {
        this.joke = data;
      }
      );



  }

}


