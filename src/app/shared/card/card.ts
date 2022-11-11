export interface ICard {
  id?: number;
  name: string;
  image_uri: string;
  mana_cost: string;
  cmc: number;
  types: string[];
  colors: string[];
  color_identity: string[];
  keywords: string[];
  card_faces: ICard[];
  rarity: string;
}

export class Card implements ICard {
  private _id: number | undefined;
  private _name: string;
  private _image_uri: string;
  private _mana_cost: string;
  private _cmc: number;
  private _types: string[];
  private _colors: string[];
  private _color_identity: string[];
  private _keywords: string[];
  private _card_faces: ICard[];
  private _rarity: string;

  constructor(
    name: string,
    image_uri: string,
    mana_cost: string,
    cmc: number,
    types: string[],
    colors: string[],
    color_identity: string[],
    keywords: string[],
    card_faces: ICard[],
    rarity: string,
    id?: number
  ) {
    this._id = id;
    this._name = name;
    this._image_uri = image_uri;
    this._mana_cost = mana_cost;
    this._cmc = cmc;
    this._types = types;
    this._colors = colors;
    this._color_identity = color_identity;
    this._keywords = keywords;
    this._card_faces = card_faces;
    this._rarity = rarity;
  }

  makeObj(): ICard {
    return {
      name: this._name,
      image_uri: this._image_uri,
      mana_cost: this._mana_cost,
      cmc: this._cmc,
      types: this._types,
      colors: this._colors,
      color_identity: this._color_identity,
      keywords: this._keywords,
      card_faces: this._card_faces,
      rarity: this._rarity,
      id: this._id,
    };
  }

  /**
   * Getter id
   * @return {number }
   */
  public get id(): number | undefined {
    return this._id;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter image_uri
   * @return {string}
   */
  public get image_uri(): string {
    return this._image_uri;
  }

  /**
   * Getter mana_cost
   * @return {string}
   */
  public get mana_cost(): string {
    return this._mana_cost;
  }

  /**
   * Getter cmc
   * @return {number}
   */
  public get cmc(): number {
    return this._cmc;
  }

  /**
   * Getter types
   * @return {string[]}
   */
  public get types(): string[] {
    return this._types;
  }

  /**
   * Getter colors
   * @return {string[]}
   */
  public get colors(): string[] {
    return this._colors;
  }

  /**
   * Getter color_identity
   * @return {string[]}
   */
  public get color_identity(): string[] {
    return this._color_identity;
  }

  /**
   * Getter keywords
   * @return {string[]}
   */
  public get keywords(): string[] {
    return this._keywords;
  }

  /**
   * Getter card_faces
   * @return {ICard[]}
   */
  public get card_faces(): ICard[] {
    return this._card_faces;
  }

  /**
   * Getter rarity
   * @return {string}
   */
  public get rarity(): string {
    return this._rarity;
  }
}
