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
