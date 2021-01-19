import { Component, OnInit } from '@angular/core';

import { Item } from '../items';
import { ItemsService } from '../items.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  
  selectedItem: Item | undefined;
  
  items: Item[] | undefined;

  constructor(private itemService: ItemsService, private messageService: MessageService) {}

  ngOnInit() {
    this.getItems();
  }
  
  onSelect(items: Item): void {
    this.selectedItem = items;
    this.messageService.add(`HeroesComponent: Selected item id=${items.id}`);
  }
  getItems(): void {
    this.itemService.getItems()
        .subscribe(items => this.items = items);
  }
}
