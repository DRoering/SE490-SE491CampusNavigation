export interface BuildingFloor {
  bottomLat: number;
  bottomLong: number;
  bounds: L.LatLngBounds;
  floorimages: { id: string; url: string; filename: string }[];
  floors: number[];
  mainfloorposition: number;
  name: string;
  topLat: number;
  topLong: number;
}
