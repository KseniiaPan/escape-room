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
