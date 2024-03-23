interface IJournal {
  owner: string;
  entries: IJournalEntry[];
}

interface IJournalEntry {
  id: number;
  date: Date;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy',
}

export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor',
}
