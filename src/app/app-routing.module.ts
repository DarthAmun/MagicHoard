import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CollectionOverviewComponent } from "./collection/collection-overview.component";
import { DeckDetailComponent } from "./deck/deck-detail.component";
import { DeckOverviewComponent } from "./deck/deck-overview.component";
import { SettingsComponent } from "./settings/settings.component";

const routes: Routes = [
  { path: "", redirectTo: "/decks", pathMatch: "full" },
  { path: "decks", component: DeckOverviewComponent },
  { path: "decks/:id", component: DeckDetailComponent },
  { path: "collection", component: CollectionOverviewComponent },
  { path: "settings", component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
