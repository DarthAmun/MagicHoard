import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DeckModule } from "./deck/deck.module";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";

import { NgxIndexedDBModule, DBConfig } from "ngx-indexed-db";
import { SettingsModule } from "./settings/settings.module";

const dbConfig: DBConfig = {
  name: "MagicHoarderDB",
  version: 1,
  objectStoresMeta: [
    {
      store: "cards",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "name", keypath: "name", options: { unique: false } },
        { name: "image_uri", keypath: "image_uri", options: { unique: false } },
        { name: "mana_cost", keypath: "mana_cost", options: { unique: false } },
        { name: "cmc", keypath: "cmc", options: { unique: false } },
        { name: "types", keypath: "types", options: { unique: false } },
        { name: "colors", keypath: "colors", options: { unique: false } },
        {
          name: "color_identity",
          keypath: "color_identity",
          options: { unique: false },
        },
        { name: "keywords", keypath: "keywords", options: { unique: false } },
        {
          name: "card_faces",
          keypath: "card_faces",
          options: { unique: false },
        },
        { name: "rarity", keypath: "rarity", options: { unique: false } },
      ],
    },
    {
      store: "decks",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "name", keypath: "name", options: { unique: true } },
        { name: "image_uri", keypath: "image_uri", options: { unique: false } },
        { name: "format", keypath: "format", options: { unique: false } },
      ],
    },
    {
      store: "decks_x_cards",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "deck_id", keypath: "deck_id", options: { unique: false } },
        { name: "card_id", keypath: "card_id", options: { unique: false } },
        { name: "amount", keypath: "amount", options: { unique: false } },
      ],
    },
  ],
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: "registerWhenStable:30000",
    }),
    BrowserAnimationsModule,
    DeckModule,
    SettingsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
