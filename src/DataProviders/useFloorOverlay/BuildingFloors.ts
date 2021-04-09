export interface BuildingFloors {
  name: string;
  floorimages: { id: string; url: string; filename: string }[];
  floors: number[];
  mainfloorposition: number;
  latitude: number;
  longitude: number;
}
