import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../items';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})

export class ItemDetailComponent implements OnInit {
 
  @Input() items: Item;
  
  constructor() { }

  ngOnInit(): void {
  }

}
