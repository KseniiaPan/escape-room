import {QuestBookingInfo} from '../types/quests-types';

export const mockBookingInfo: QuestBookingInfo[] = [
  {
    'id': '2efa11db-4cf3-4d27-a4e5-c5630de284ee',
    'location': {
      'address': 'Автозаводский пр-д, 1, м. Шушары',
      'coords': [
        59.82179701478202,
        30.42098372734333
      ]
    },
    'slots': {
      'today': [
        {
          'time': '14:00',
          'isAvailable': false
        },
        {
          'time': '15:00',
          'isAvailable': false
        },
        {
          'time': '16:00',
          'isAvailable': false
        },
        {
          'time': '17:00',
          'isAvailable': false
        },
        {
          'time': '18:00',
          'isAvailable': true
        },
        {
          'time': '19:00',
          'isAvailable': true
        },
        {
          'time': '20:00',
          'isAvailable': true
        }
      ],
      'tomorrow': [
        {
          'time': '14:00',
          'isAvailable': true
        },
        {
          'time': '15:00',
          'isAvailable': true
        },
        {
          'time': '16:00',
          'isAvailable': true
        },
        {
          'time': '17:00',
          'isAvailable': false
        },
        {
          'time': '18:00',
          'isAvailable': false
        },
        {
          'time': '19:00',
          'isAvailable': false
        },
        {
          'time': '20:00',
          'isAvailable': true
        }
      ]
    }
  },
  {
    'id': '612cc98e-ee73-4517-b156-2b040f2f781e',
    'location': {
      'address': 'Полюстровский парк, м. Ладожская',
      'coords': [
        59.96536433646851,
        30.424032915448624
      ]
    },
    'slots': {
      'today': [
        {
          'time': '14:00',
          'isAvailable': true
        },
        {
          'time': '15:00',
          'isAvailable': false
        },
        {
          'time': '16:00',
          'isAvailable': false
        },
        {
          'time': '17:00',
          'isAvailable': false
        },
        {
          'time': '18:00',
          'isAvailable': false
        },
        {
          'time': '19:00',
          'isAvailable': true
        },
        {
          'time': '20:00',
          'isAvailable': true
        }
      ],
      'tomorrow': [
        {
          'time': '14:00',
          'isAvailable': true
        },
        {
          'time': '15:00',
          'isAvailable': true
        },
        {
          'time': '16:00',
          'isAvailable': true
        },
        {
          'time': '17:00',
          'isAvailable': true
        },
        {
          'time': '18:00',
          'isAvailable': false
        },
        {
          'time': '19:00',
          'isAvailable': false
        },
        {
          'time': '20:00',
          'isAvailable': true
        }
      ]
    }
  }
];

