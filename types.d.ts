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
