export interface navStoreState {
  navBar: boolean;
  setNavBar: () => void;
}

export interface supportStoreState {
  support: boolean; 
  setSupport: () => void; 
}
// Form Definitions Start

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

export interface FeedBackFormType {
  name: string;
  email: string;
  message: string;
}

// Form Definitions End

// landing page definitions

export interface FlagIconsProp {
  code: string;
  name: string;
  percentage: string;
  up: boolean;
  percentageChange: string;
}

export interface PlanProps {
  plan: string;
  percentage: string;
  term: string;
  minMax: string;
  referral: string;
}

export interface QuestionProps {
  item: string;
  question: string;
  answer: string;
}

// landing page definitions end
