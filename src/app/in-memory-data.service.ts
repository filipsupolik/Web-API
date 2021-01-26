import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', item: [], money: 1000,life: 100,strenght: 5},
  { id: 12, name: 'Narco', item: [], money: 900,life: 100,strenght: 10},
  { id: 13, name: 'Bombasto',item: [], money: 800,life: 100,strenght:15},
  { id: 14, name: 'Celeritas',item: [], money: 700,life: 100,strenght:20},
  { id: 15, name: 'Magneta',item: [], money: 600,life: 100,strenght:25},
  { id: 16, name: 'RubberMan',item: [], money: 500,life: 100,strenght:30},
  { id: 17, name: 'Dynama',item: [], money: 400,life: 100,strenght:35},
  { id: 18, name: 'Dr IQ',item: [], money: 300,life: 100,strenght:40},
  { id: 19, name: 'Magma',item: [], money: 200,life: 100,strenght:45},
  { id: 20, name: 'Tornado',item: [], money: 100,life: 100,strenght:50}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}