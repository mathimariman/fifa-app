export interface PriceDetails {
  LCPrice: string;
  LCPrice2: string;
  LCPrice3: string;
  LCPrice4: string;
  LCPrice5: string;
  updated: string;
  MinPrice: string;
  MaxPrice: string;
  PRP: string;
}

export interface Prices {
  xbox: PriceDetails;
  ps: PriceDetails;
  pc: PriceDetails;
}

export interface EaPrices {
  [key: string]: { prices: Prices };
}
