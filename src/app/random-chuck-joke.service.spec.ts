/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RandomChuckJokeService } from './random-chuck-joke.service';

describe('RandomChuckJokeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomChuckJokeService]
    });
  });

  it('should ...', inject([RandomChuckJokeService], (service: RandomChuckJokeService) => {
    expect(service).toBeTruthy();
  }));
});
