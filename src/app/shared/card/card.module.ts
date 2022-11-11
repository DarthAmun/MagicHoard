import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card.component";

import { HttpClientModule } from "@angular/common/http";

import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from "@angular/material/chips";

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
  ],
  exports: [CardComponent],
})
export class CardModule {}
