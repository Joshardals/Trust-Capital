export interface navStoreState {
  navBar: boolean;
  setNavBar: () => void;
}

export interface coinsList {
  id: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_24h: number;
}

export interface coinsDetails {
  name: string;
  image: string;
  price: number;
  priceChange: number;
}
