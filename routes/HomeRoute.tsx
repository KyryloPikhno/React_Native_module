import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum HomeRoutes {
  Home = 'Home',
  Posts = 'Posts',
  MainTab = 'MainTab',
}

export type HomeParams = {[HomeRoutes.Home]: undefined};

export type PostsParams = {[HomeRoutes.Posts]: {postId: string}};

export type HomeNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<HomeParams, HomeRoutes.Home>,
  CompositeNavigationProp<
    NativeStackNavigationProp<HomeParams, HomeRoutes.Home>,
    NativeStackNavigationProp<PostsParams, HomeRoutes.Posts>
  >
>;

export type PostsRouteProps<RouteName extends keyof PostsParams> = RouteProp<
  PostsParams,
  RouteName
>;
