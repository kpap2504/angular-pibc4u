import { Component, OnInit } from "@angular/core";

import { HeroService } from "../hero.service";
import { Hero } from "../hero";
import { HEROES } from "../mock-heroes";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  heroes1 = [
    new Hero(1, "Windstorm"),
    new Hero(13, "Bombasto"),
    new Hero(15, "Magneta"),
    new Hero(20, "Tornado")
  ];

  myHero = this.heroes1[0];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    //this.heroes = HEROES;
    this.getHeroes();
    this.myHero = this.heroes[0];
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes1(): void {
    this.heroes = this.heroService.getHeroes1();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }
}
