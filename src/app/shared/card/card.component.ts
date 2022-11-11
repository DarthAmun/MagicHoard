import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ICard } from "./card";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() card!: ICard;
  @Input() amount: number = 1;
  @Input() isInDeck: boolean = false;
  @Output() newAddEventEmitter = new EventEmitter<number>();
  @Output() newRemoveEventEmitter = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onAdd() {
    this.newAddEventEmitter.emit(this.card.id);
  }
  onRemove() {
    this.newRemoveEventEmitter.emit(this.card.id);
  }
}
