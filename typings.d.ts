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

export interface OnboardingValidationType {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
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
export interface SignUpValidationType {
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
  method: any;
  amount: string;
}

export interface SecretType {
  secretKey: string;
}

export interface ConfirmDepositType {
  address: string;
}

export interface WithdrawalType {
  method: any;
  amount: string;
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

// export interface PlanItemProps {
//   plan: string;
//   method: string;
// }

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

interface Window {
  googleTranslateElementInit: () => void;
}
