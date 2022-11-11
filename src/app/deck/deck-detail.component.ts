import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { AddCardsComponent } from "./add-cards.component";
import { IDeckCard } from "./deck";
import { DeckService } from "./deck.service";

@Component({
  selector: "app-deck-detail",
  templateUrl: "./deck-detail.component.html",
  styleUrls: ["./deck-detail.component.css"],
})
export class DeckDetailComponent implements OnInit {
  deckId!: number;
  deckCards: IDeckCard[] = [];

  constructor(
    private deckService: DeckService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params); //log the entire params object
      this.deckId = +params["id"];
      this.load();
    });
  }

  load() {
    this.deckService.loadCards(this.deckId).subscribe((cards) => {
      this.deckCards = cards;
    });
  }

  onAdd(id: number) {
    this.deckService.add(this.deckId, id).subscribe((data) => this.load());
  }

  onRemove(id: number) {
    this.deckService.remove(this.deckId, id).subscribe((data) => this.load());
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddCardsComponent, {
      data: {
        deckId: this.deckId,
      },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
      this.load();
    });
  }
}
