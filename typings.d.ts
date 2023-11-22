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
}

export interface SignInValidationType {
  email: string; 
  password: string; 
}