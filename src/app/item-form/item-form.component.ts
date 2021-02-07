import { Component, OnInit } from '@angular/core';
import { Item } from '../items';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  model: Item = { name: '', id:10, price: 0 }

  constructor(private itemService:ItemsService) { }

  ngOnInit(): void {
  }

  onSubmit() { 
    this.itemService.addItem(this.model).subscribe();
  }

}
