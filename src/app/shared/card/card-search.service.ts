import { Injectable } from "@angular/core";
import { NgxIndexedDBService } from "ngx-indexed-db";
import { ICard } from "./card";

@Injectable({
  providedIn: "root",
})
export class CardSearchService {
  cards: ICard[] = [];

  constructor(private dbService: NgxIndexedDBService) {
    this.dbService.getAll("cards").subscribe((cards: any[]) => {
      this.cards = cards;
      console.log("Cards loaded");
    });
  }

  getAll(): ICard[] {
    return this.cards;
  }

  findByName(value: string): ICard[] {
    if (value.length > 3) {
      console.log(this.cards.length, value);
      return this.cards
        .filter((card: ICard) => card.name.includes(value))
        .slice(1, 10);
    }
    return [];
  }

  findByNames(value: string): ICard[] {
    let cards: ICard[] = [];
    value.split("\n").forEach((row: string) => {
      let split = row.split(" ");
      let amount = split[0];
      split.shift();
      let cardName = split.join(" ");

      let foundCard = this.cards.filter((card: ICard) => card.name === cardName)[0];
      if (foundCard !== undefined) cards.push(foundCard);
    });
    return cards;
  }
}
