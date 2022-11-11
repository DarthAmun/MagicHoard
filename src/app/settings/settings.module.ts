import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SettingsComponent } from "./settings.component";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
})
export class SettingsModule {}
