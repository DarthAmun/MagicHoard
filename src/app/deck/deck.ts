import { ICard } from "../shared/card/card";

export enum Format {
  Alchemy,
  Archon,
  AustralianHighlander,
  CanadianHighlander,
  Centurion,
  CommanderEDH,
  Conquest,
  DuelCommander,
  EuropeanHighlander,
  Explorer,
  Gladiator,
  Historic,
  HistoricBrawl,
  Legacy,
  Leviathan,
  Modern,
  Oathbreaker,
  OldSchool,
  Pauper,
  PauperEDH,
  PennyDreadful,
  Pioneer,
  Premodern,
  Primordial,
  Standard,
  TinyLeaders,
  Vintage,
  None,
}

export interface IDeck {
  id?: number;
  name: string;
  format: Format;
  image_uri: string;
  cards: {
    card: ICard;
    isCommander: boolean;
    isSideboard: boolean;
    isConsidering: boolean;
  }[];
}

export interface IDeckCards {
  id: number;
  deck_id: number;
  card_id: number;
  amount: number;
}

export interface IDeckCard {
  card: ICard;
  amount: number;
  isCommander: boolean;
}