import { Component, Inject, Input, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ICard } from "../shared/card/card";
import { CardSearchService } from "../shared/card/card-search.service";
import { DeckService } from "./deck.service";

@Component({
  selector: "app-add-cards",
  templateUrl: "./add-cards.component.html",
  styleUrls: ["./add-cards.component.css"],
})
export class AddCardsComponent implements OnInit {
  searchValue: string = "";
  importText: string = "";
  foundCards: ICard[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { deckId: number },
    private cardSearchService: CardSearchService,
    private deckService: DeckService
  ) {}

  ngOnInit(): void {}

  onSearch() {
    this.foundCards = this.cardSearchService.findByName(this.searchValue);
  }

  onAdd(id: number) {
    this.deckService.add(this.data.deckId, id).subscribe();
  }

  onImport() {
    let ids: number[] = this.cardSearchService
      .findByNames(this.importText)
      .map((card) => card.id || 0);
    this.deckService.addBulk(this.data.deckId, ids);
  }
}
