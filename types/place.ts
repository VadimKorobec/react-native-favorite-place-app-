 type Location = {
  lat: number;
  lng: number;
};

export type Place = {
  id: string;
  title: string;
  imageUri: string;
  address: string;
  location: Location;
};
