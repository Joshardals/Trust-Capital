// Zustand Definitions Start

export interface navStoreState {
  navBar: boolean;
  setNavBar: () => void;
}
export interface sideStoreState {
  sideBar: boolean;
  setSideBar: () => void;
}

export interface supportStoreState {
  support: boolean;
  setSupport: () => void;
}

export interface editStoreState {
  editAcct: boolean; 
  setEditAcct: () => void; 
}
// Zustand Definitions End

// Form Definitions Start

export interface SignUpValidationType {
  secretKey: string; 
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

export interface PlansType {
  plan: any;
}

export interface SecretType {
  secretKey: string; 
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

// Dashboard Start Definitions //

// Deposit Definitions

export interface PlanItemProps {
  plan: string;
}

// Edit Account Definitions

export interface EditValidationType {
  bitcoinAddress: string;
  ethereumAddress: string;
  litecoinAddress: string;
  usdtAddress: string;
  dogeAddress: string;
  tronAddress: string;
  bnbAddress: string;
  shibaAddress: string;
}

// Dashboard Definitions End
