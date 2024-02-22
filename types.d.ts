import { NavigationProp } from '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Login: undefined;
      Register: undefined;
    }
  }
}

export type Navigation = NavigationProp<ReactNavigation.RootParamList>;

export interface User {
  name?: string;
  username: string;
  password: string;
}

export interface Background {
  children: ReactNode;
}
