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

export const QuestLevel = {
  Any: {
    enName: 'any',
    ruName: 'любой',
  },
  Easy: {
    enName: 'easy',
    ruName: 'легкий',
  },
  Medium: {
    enName: 'medium',
    ruName: 'средний',
  },
  Hard: {
    enName: 'hard',
    ruName: 'сложный',
  },
} as const;

export const MapIconInfo = {
  iconSize: [23, 42],
  iconAnchor: [20, 40]
};

export const MapIcon = {
  Default: {
    iconUrl: 'img/svg/pin-default.svg',
    MapIconInfo
  },
  Active: {
    iconUrl: 'img/svg/pin-active.svg',
    MapIconInfo
  },
} as const;

export const mainAddressCoords = [59.968322, 30.317359] as LatLngExpression;
export const MAP_ZOOM = 13;
