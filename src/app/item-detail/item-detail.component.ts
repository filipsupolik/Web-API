import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../items';
import { ItemsService } from '../items.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})

export class ItemDetailComponent implements OnInit {
 
  @Input() items: Item;
  
  constructor(
    private route:ActivatedRoute,
    private itemService:ItemsService,
    private location:Location
  ) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.itemService.getItem(id)
      .subscribe(hero => this.items = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.itemService.updateItem(this.items)
      .subscribe(() => this.goBack());
  }
}