export interface ImageUrls {
  dark: string;
  light: string;
}

export interface League {
  imageUrls: ImageUrls;
  abbrName: string;
  id: number;
  imgUrl?: any;
  name: string;
}

export interface ImageUrls2 {
  small: string;
  medium: string;
  large: string;
}

export interface Nation {
  imageUrls: ImageUrls2;
  abbrName: string;
  id: number;
  imgUrl?: any;
  name: string;
}

export interface Dark {
  small: string;
  medium: string;
  large: string;
}

export interface Light {
  small: string;
  medium: string;
  large: string;
}

export interface ImageUrls3 {
  dark: Dark;
  light: Light;
}

export interface Club {
  imageUrls: ImageUrls3;
  abbrName: string;
  id: number;
  imgUrl?: any;
  name: string;
}

export interface Headshot {
  imgUrl: string;
  isDynamicPortrait: boolean;
}

export interface Attribute {
  name: string;
  value: number;
  chemistryBonus: number[];
}

export interface EaPlayer {
  commonName: string;
  firstName: string;
  lastName: string;
  league: League;
  nation: Nation;
  club: Club;
  headshot: Headshot;
  position: string;
  composure: number;
  playStyle: string;
  playStyleId?: any;
  height: number;
  weight: number;
  birthdate: string;
  age: number;
  acceleration: number;
  aggression: number;
  agility: number;
  balance: number;
  ballcontrol: number;
  foot: string;
  skillMoves: number;
  crossing: number;
  curve: number;
  dribbling: number;
  finishing: number;
  freekickaccuracy: number;
  gkdiving: number;
  gkhandling: number;
  gkkicking: number;
  gkpositioning: number;
  gkreflexes: number;
  headingaccuracy: number;
  interceptions: number;
  jumping: number;
  longpassing: number;
  longshots: number;
  marking: number;
  penalties: number;
  positioning: number;
  potential: number;
  reactions: number;
  shortpassing: number;
  shotpower: number;
  slidingtackle: number;
  sprintspeed: number;
  standingtackle: number;
  stamina: number;
  strength: number;
  vision: number;
  volleys: number;
  weakFoot: number;
  traits: string[];
  specialities: string[];
  atkWorkRate: string;
  defWorkRate: string;
  playerType?: any;
  attributes: Attribute[];
  name: string;
  rarityId: number;
  isIcon: boolean;
  quality: string;
  isGK: boolean;
  positionFull: string;
  isSpecialType: boolean;
  contracts?: any;
  fitness?: any;
  rawAttributeChemistryBonus?: any;
  isLoan?: any;
  squadPosition?: any;
  iconAttributes?: any;
  itemType: string;
  discardValue?: any;
  id: string;
  modelName: string;
  baseId: number;
  rating: number;
}

export interface EaResponse {
  page: number;
  totalPages: number;
  totalResults: number;
  type: string;
  count: number;
  items: EaPlayer[];
}
