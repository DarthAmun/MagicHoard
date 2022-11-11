import { Injectable } from "@angular/core";
import { NgxIndexedDBService } from "ngx-indexed-db";
import { observable, Observable } from "rxjs";
import { ICard } from "../shared/card/card";
import { IDeckCard, IDeckCards } from "./deck";

@Injectable({
  providedIn: "root",
})
export class DeckService {
  constructor(private dbService: NgxIndexedDBService) {}

  loadCards(id: number): Observable<IDeckCard[]> {
    console.log("loadCards", id);
    return new Observable<IDeckCard[]>((observer) => {
      this.dbService.getAll("decks_x_cards").subscribe((cardsOfDeck: any[]) => {
        let cardIds: number[] = [];
        cardsOfDeck
          .filter((elm: IDeckCards) => elm.deck_id === id)
          .forEach((elm: IDeckCards) => {
            cardIds.push(elm.card_id);
          });
        this.dbService.bulkGet("cards", cardIds).subscribe((result: any[]) => {
          let cards: IDeckCard[] = [];
          cardsOfDeck
            .filter((elm: IDeckCards) => elm.deck_id === id)
            .forEach((elm: IDeckCards) => {
              const c = result.filter(
                (card: ICard) => elm.card_id === card.id
              )[0];
              cards.push({ card: c, amount: elm.amount, isCommander: false });
            });
          cards = cards.sort(
            (a: IDeckCard, b: IDeckCard) => a.card.cmc - b.card.cmc
          );
          observer.next(cards);
          observer.complete();
        });
      });
    });
  }

  add(deckId: number, id: number): Observable<any> {
    return new Observable<any>((observable) => {
      this.dbService.getAll("decks_x_cards").subscribe((deckCards: any[]) => {
        const cards = deckCards.filter(
          (deckCard: IDeckCards) =>
            deckCard.deck_id === deckId && deckCard.card_id === id
        );
        if (cards.length > 0) {
          let card = cards[0];
          card.amount++;
          this.dbService
            .update("decks_x_cards", card)
            .subscribe((storeData) => {
              observable.next(storeData);
              observable.complete();
            });
        } else {
          this.dbService
            .add("decks_x_cards", {
              deck_id: deckId,
              card_id: id,
              amount: 1,
            })
            .subscribe((key) => {
              observable.next(key);
              observable.complete();
            });
        }
      });
    });
  }

  addBulk(deckId: number, ids: number[]) {
    ids.forEach((id: number) => {
      this.add(deckId, id).subscribe();
    });
  }

  remove(deckId: number, id: number): Observable<any> {
    return new Observable<any>((observable) => {
      this.dbService.getAll("decks_x_cards").subscribe((deckCards: any[]) => {
        deckCards
          .filter(
            (deckCard: IDeckCards) =>
              deckCard.deck_id === deckId && deckCard.card_id === id
          )
          .forEach((deckCard: IDeckCards) => {
            if (deckCard.amount > 1) {
              deckCard.amount--;
              this.dbService
                .update("decks_x_cards", deckCard)
                .subscribe((storeData) => {
                  observable.next(storeData);
                  observable.complete();
                });
            } else {
              this.dbService
                .delete("decks_x_cards", deckCard.id)
                .subscribe((storeData) => {
                  observable.next(storeData);
                  observable.complete();
                });
            }
          });
      });
    });
  }
}
