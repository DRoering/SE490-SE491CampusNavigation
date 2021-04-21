export interface BuildingFloor {
  name: string;
  floorimages: { id: string; url: string; filename: string }[];
  floors: number[];
  mainfloorposition: number;
  topLat: number;
  topLong: number;
  bottomLat: number;
  bottomLong: number;
  bounds: L.LatLngBounds;
}
