import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService, Heroe } from "../../servicios/heroes.service";

@Component({
  selector: "app-search-heroe",
  templateUrl: "./search-heroe.component.html"
})
export class SearchHeroeComponent implements OnInit {
  heroes: Heroe[] = [];
  termino: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params["termino"];
      this.heroes = this._heroesService.buscarHeroes(params["termino"]);
      //console.log(this.heroes);
    });
  }
}
