interface DailyHours {
  open: number;
  close: number;
}

export interface CommonProperties {
  accessibility?: string;
  building?: string;
  coordinates: [number, number] | L.LatLng;
  hours?: DailyHours[];
  id: number;
  name: string;
  room?: string;
  virtual?: boolean;
  isOpen?: boolean;
}
