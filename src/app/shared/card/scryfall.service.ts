import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICard } from "./card";

export interface ScryfallSearchBody {
  object: string;
  total_cards: number;
  has_more: boolean;
  data: ICard[];
}

@Injectable({
  providedIn: "root",
})
export class ScryfallService {
  constructor(private http: HttpClient) {}

  findCard(name: string): Observable<Config> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("q", name);

    return this.http.get<Config>("https://api.scryfall.com/cards/search", {
      params: queryParams,
    });
  }
}
