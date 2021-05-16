import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' },
    ];
    const citations = [
      {
        id: 11,
        message: 'I like to be involved in things that change the world',
        author: 'Elon Musk',
        image: 'assets/img/elon-musk.jpg',
      },
      {
        id: 12,
        message: 'Simplicity is the ultimate sophistication ',
        author: 'Leonardo da Vinci',
        image: 'assets/img/leonardo-da-vinci.jpeg',
      },
      {
        id: 13,
        message:
          'Games are won by players who focus on the playing field, not by those whose eyes are glued to the scoreboard',
        author: 'Warren Edward Buffett',
        image: 'assets/img/warren-edward-buffet.jpeg',
      },
      {
        id: 14,
        message: 'Cleverness is a gift, kindness is a choice ',
        author: 'Jeff Bezos',
        image: 'assets/img/jeff-bezos.jpeg',
      },
      {
        id: 15,
        message: 'Imagination is more important than knowledge',
        author: 'Albert Einstein',
        image: 'assets/img/albert-einstein.jpeg',
      },
      {
        id: 16,
        message: 'Done is better than perfect ',
        author: 'Sheryl Sandberg',
        image: 'assets/img/sheryl-sandberg.jpg',
      },
      {
        id: 17,
        message: 'Stay hungry , stay foolish',
        author: 'Steven Paul Jobs',
        image: 'assets/img/steven-paul-jobs.jpeg',
      },
    ];
    return { heroes, citations };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
