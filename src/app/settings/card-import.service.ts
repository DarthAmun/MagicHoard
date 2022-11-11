import { Injectable } from "@angular/core";
import { NgxIndexedDBService } from "ngx-indexed-db";
import { Observable, Subscriber } from "rxjs";
import { Card, ICard } from "../shared/card/card";

@Injectable({
  providedIn: "root",
})
export class CardImportService {
  constructor(private dbService: NgxIndexedDBService) {}

  import(cardString: string): Observable<any> {
    let success: boolean = false;

    return new Observable<any>((observer: Subscriber<boolean>): void => {
      console.log("--- Start Import ---");
      try {
        const cardImportObj = JSON.parse(cardString);
        let cardsToImport: ICard[] = [];

        console.log("Start conversion ...");
        cardImportObj.forEach((elm: any) => {
          const newCard = this.convertToICard(elm).makeObj();
          delete newCard.id;
          cardsToImport.push(newCard);
        });
        console.log("... Done!");

        console.log("Import to DB ...");
        this.dbService
          .bulkAdd("cards", cardsToImport)
          .subscribe((result) => {
            if (cardsToImport.length === result.length) {
              success = true;
              console.log("... Success!");
            } else {
              console.log("... Done with Errors!");
            }
            observer.next(success);
            observer.complete();
          });
      } catch (e) {
        observer.error(e);
      }
    });
  }

  convertToICard(card: any): Card {
    return new Card(
      card.name,
      card.image_uris?.normal,
      card.mana_cost,
      card.cmc,
      card.type_line
        ?.replaceAll("//", " ")
        .replaceAll("—", " ")
        .trim()
        .split(" "),
      card.colors,
      card.color_identity,
      card.keywords,
      card.card_faces?.map((cardFace: any) => this.convertToICard(cardFace)),
      card.rarity
    );
  }
}
