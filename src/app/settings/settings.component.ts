import { Component, OnInit } from "@angular/core";
import { CardImportService } from "./card-import.service";
import { FileUploadService } from "./file-upload.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"],
})
export class SettingsComponent implements OnInit {
  fileName: string = "";
  loading: boolean = false;

  constructor(
    private fileUploadService: FileUploadService,
    private cardImportService: CardImportService
  ) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    this.loading = true;
    const files: File[] = event.target.files;
    this.fileUploadService.upload(files).subscribe((event: any) => {
      if (typeof event === "string") {
        this.cardImportService.import(event).subscribe((event) => {
          this.loading = false; // Flag variable
          console.log("Success");
        });
      }
    });
  }
}
