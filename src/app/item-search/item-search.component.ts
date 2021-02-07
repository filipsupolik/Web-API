import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Item } from '../items';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './item-search.component.html',
  styleUrls: [ './item-search.component.css' ]
})
export class ItemsSearchComponent implements OnInit {
  items$: Observable<Item[]> | undefined;
  private searchTerms = new Subject<string>();

  constructor(private itemService: ItemsService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.items$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.itemService.searchItems(term)),
    );
  }
}