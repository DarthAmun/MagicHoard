import { Pipe, PipeTransform } from "@angular/core";
import { Format } from "./deck";

@Pipe({
  name: "formatToString",
})
export class FormatToStringPipe implements PipeTransform {
  transform(value: number): any {
    return Object.values(Format)[value];
  }
}
