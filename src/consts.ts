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
