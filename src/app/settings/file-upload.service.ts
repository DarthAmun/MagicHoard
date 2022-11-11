import { Injectable } from "@angular/core";
import { Observable, Subscriber } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FileUploadService {
  constructor() {}

  upload(files: File[]): Observable<any> {
    let reader = new FileReader();
    reader.readAsText(files[0]);

    return new Observable<string>((observer: Subscriber<string>): void => {
      // if success
      reader.onload = (): void => {
        const { result } = reader;
        const data = result as string; // <--- FileReader gives us the ArrayBuffer
        observer.next(data);
        observer.complete();
      };

      // if failed
      reader.onerror = (): void => {
        const { error } = reader;
        observer.error(error);
      };
    });
  }
}
