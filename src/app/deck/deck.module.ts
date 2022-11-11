import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { DeckOverviewComponent } from "./deck-overview.component";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTabsModule } from "@angular/material/tabs";

import { FormatToStringPipe } from "./format-to-string.pipe";
import { DeckDetailComponent } from "./deck-detail.component";
import { FilterDeckCategoryPipe } from "./filter-deck-category.pipe";
import { CardModule } from "../shared/card/card.module";
import { FilterDeckCategoryAmountPipe } from "./filter-deck-category-amount.pipe";
import { AddCardsComponent } from "./add-cards.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    DeckOverviewComponent,
    FormatToStringPipe,
    DeckDetailComponent,
    FilterDeckCategoryPipe,
    FilterDeckCategoryAmountPipe,
    AddCardsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule,
    MatDialogModule,
    MatTabsModule,
    CardModule,
    SharedModule,
  ],
})
export class DeckModule {}
