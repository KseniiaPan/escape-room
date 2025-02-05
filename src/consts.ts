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
