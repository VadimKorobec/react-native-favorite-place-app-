import { LocationCoords } from "./locationCoords";

export type Place = {
  id: string;
  title: string;
  imageUri: string;
  address: string;
  location: LocationCoords;
};
