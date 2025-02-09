import {LatLngExpression} from 'leaflet';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  MyQuests = '/my-quests',
  Quest = '/quest/:id',
  QuestBooking = '/quest/:id/booking',
  Contacts = '/contacts',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  App = 'App',
  Quests = 'Quests',
  Quest = 'Quest',
  User = 'User',
  Booking = 'Booking',
}

export enum APIRoute {
  Quests = '/quest',
  Login = '/login',
  Logout = '/logout',
  Booking= '/booking',
  MyBooking='/reservation',
}

export const questLevels = [
  {
    name: 'any',
    ruName: 'любой',
  },
  {
    name: 'easy',
    ruName: 'легкий',
  },
  {
    name: 'medium',
    ruName: 'средний',
  },
  {
    name: 'hard',
    ruName: 'сложный',
  },
];

export const questThemes = [
  {
    name: 'all-quests',
    ruName: 'Все квесты',
  },
  {
    name: 'adventure',
    ruName: 'Приключения',
  },
  {
    name: 'horror',
    ruName: 'Ужасы',
  },
  {
    name: 'mystic',
    ruName: 'Мистика',
  },
  {
    name: 'detective',
    ruName: 'Детектив',
  },
  {
    name: 'sci-fi',
    ruName: 'Sci-fi',
  },
];

export const MapIconInfo = {
  iconSize: [23, 42],
  iconAnchor: [20, 40]
};

export const MapIcon = {
  Default: {
    iconUrl: 'public/img/svg/pin-default.svg',
    MapIconInfo
  },
  Active: {
    iconUrl: 'public/img/svg/pin-active.svg',
    MapIconInfo
  },
} as const;

export const mainAddressCoords = [59.968322, 30.317359] as LatLngExpression;

export const defaultSpbCoords = [59.9386, 30.3141] as LatLngExpression;
export const MAP_ZOOM = 10;

export const contactsAddresses = [{
  id: '12345678',
  location: {
    address: 'Набережная реки Карповка, д 5П',
    coords: mainAddressCoords,
  }
}];
