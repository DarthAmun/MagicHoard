import { Pipe, PipeTransform } from "@angular/core";
import { IDeckCard } from "./deck";

@Pipe({
  name: "filterDeckCategoryAmount",
})
export class FilterDeckCategoryAmountPipe implements PipeTransform {
  transform(cards: IDeckCard[], category: string): number {
    let amount: number = 0;
    cards
      .filter((card: IDeckCard) => {
        if (
          category !== "Creature" &&
          card.card.types.filter((type: string) => type === "Creature").length
        )
          return false;
        return card.card.types.filter((type: string) => type === category)
          .length;
      })
      .forEach((card: IDeckCard) => {
        amount += card.amount;
      });
    return amount;
  }
}
