import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgxIndexedDBService } from "ngx-indexed-db";
import { Format, IDeck } from "./deck";

@Component({
  selector: "app-deck-overview",
  templateUrl: "./deck-overview.component.html",
  styleUrls: ["./deck-overview.component.css"],
})
export class DeckOverviewComponent implements OnInit {
  public decks: IDeck[] = [];

  constructor(private dbService: NgxIndexedDBService, private router: Router) {}

  ngOnInit(): void {
    this.triggerReload();
  }

  onAddDeck = (): void => {
    const newDeck: IDeck = {
      name: "New Deck",
      format: Format.Alchemy,
      image_uri: "",
      cards: [],
    };
    this.dbService.add("decks", newDeck).subscribe((key) => {
      console.log("key: ", key);
      this.triggerReload();
    });
  };

  triggerReload = () => {
    this.dbService.getAll("decks").subscribe((decks: any[]) => {
      console.log(decks);
      this.decks = decks;
    });
  };

  onEdit = (id: number) => {
    this.router.navigate([`/decks/${id}`]);
  };

  onDelete = (id: number) => {
    this.dbService.deleteByKey("decks", id).subscribe((status) => {
      console.log("Deleted?:", status);
      if (status) {
        this.triggerReload();
      }
    });
  };
}
