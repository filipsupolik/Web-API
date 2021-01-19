import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';

import { Item} from './items';
import { ITEMS } from './mock-items';

import { Observable } from'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private messageSerice: MessageService) { }
  getItems(): Observable <Item[]> {
    //TODO send the message _after_ fetching the heroes
    this.messageSerice.add('ItemService: fetched heroes');
    return of(ITEMS);
  }
}
