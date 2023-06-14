export enum NavigationRoute {
    Home = 'Home',
    Animation101Screen = 'Animation101Screen',
    Animation102Screen = 'Animation102Screen',
  }

  export type NavigationParams = {
    [NavigationRoute.Home]: undefined;
    [NavigationRoute.Animation101Screen]: undefined;
    [NavigationRoute.Animation102Screen]: undefined;
  };
