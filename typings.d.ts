export interface navStoreState {
  navBar: boolean;
  setNavBar: () => void;
}

export interface SignUpValidationType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string; 
  bitcoinAddress: string; 
  ethereumAddress: string; 
  litecoinAddress: string; 
  usdtAddress: string; 
  dogeAddress: string; 
  tronAddress: string; 
  bnbAddress: string; 
  shibaAddress: string; 
}

export interface SignInValidationType {
  email: string; 
  password: string; 
}