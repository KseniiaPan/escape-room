import {LatLngExpression} from 'leaflet';

export type Quest = {
    id: string;
    title: string;
    previewImg: string;
    previewImgWebp: string;
    level: 'easy' | 'medium' | 'hard';
    type: string;
    peopleMinMax: number[];
  };

export type FullQuest = Quest & {
    description: string;
    coverImg: string;
    coverImgWebp: string;
  }

export type QuestFilter = {
      name: string;
      ruName: string;
  }
export type QuestSlot = {
  time: string;
  isAvailable: boolean;
}

export type QuestLocation = {
  address: string;
  coords: LatLngExpression;
}
export type QuestTimeSlots = {
  today: QuestSlot[];
  tomorrow: QuestSlot[];
}
export type QuestBookingInfo = {
  id: string;
  location: QuestLocation;
  slots: QuestTimeSlots;
}
export type CurrentQuestLocation = Omit<QuestBookingInfo, 'slots'>;

export type QuestBookingForm = {
  date: string | undefined;
  time: string | undefined;
  contactPerson: string;
  phone: string;
  peopleCount: undefined | number;
  withChildren?: boolean;
};
