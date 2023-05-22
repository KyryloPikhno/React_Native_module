import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum HomeRoutes {
  Home = 'Home',
  Posts = 'Posts',
  MainTab = 'MainTab',
  Characters = 'Characters',
}

export type HomeParams = {[HomeRoutes.Home]: undefined};

export type PostsParams = {[HomeRoutes.Posts]: {postId: string}};

export type CharactersParams = {
  [HomeRoutes.Characters]: {charactersId: string};
};

export type HomeNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<HomeParams, HomeRoutes.Home>,
  CompositeNavigationProp<
    NativeStackNavigationProp<PostsParams, HomeRoutes.Posts>,
    NativeStackNavigationProp<CharactersParams, HomeRoutes.Characters>
  >
>;

export type PostsRouteProps<RouteName extends keyof PostsParams> = RouteProp<
  PostsParams,
  RouteName
>;

export type CharactersRouteProps<RouteName extends keyof CharactersParams> = RouteProp<
  CharactersParams,
  RouteName
>;
