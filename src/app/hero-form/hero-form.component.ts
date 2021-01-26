import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  model: Hero = { name: '', item:[], money:1000, life:0, strenght: 0}

  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
  }

  onSubmit() { 
    this.heroService.addHero(this.model).subscribe();
  }

}
