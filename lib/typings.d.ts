export interface navStoreState {
  navBar: boolean;
  setNavBar: () => void;
}

export interface coinsList {
  id: string;
  symbol: string;
  image: string;
  current_price: string;
  price_change_24h: string;
}

export interface coinsDetails {
  name: string;
  image: string;
  price: string;
  priceChange: string;
}
