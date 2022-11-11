import { Pipe, PipeTransform } from "@angular/core";
import { ICard } from "../shared/card/card";
import { IDeckCard } from "./deck";

@Pipe({
  name: "filterDeckCategory",
})
export class FilterDeckCategoryPipe implements PipeTransform {
  transform(cards: IDeckCard[], category: string): IDeckCard[] {
    return cards.filter((card: IDeckCard) => {
      if (
        category !== "Creature" &&
        card.card.types.filter((type: string) => type === "Creature").length
      )
        return false;
      return card.card.types.filter((type: string) => type === category).length;
    });
  }
}
