interface ICallEntry {
  id: string;
  name: string;
  image: string;
  callType: 'incoming' | 'outgoing' | 'missed';
  duration: number;
  date: string; // or Date if you prefer to use Date objects
  totalMissed: number;
}

export type {ICallEntry};
