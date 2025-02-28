const GOOGLE_API_KEY = "AIzaSyDfyzp1HyaZzm3750F9wj1hHOEjrUfXa2w";

const getMapPriview = (lat: number, lng: number) => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap
&markers=color:red%7Clabel:S%7C${lat},${lng}
&key=${GOOGLE_API_KEY}&signature=YOUR_SIGNATURE`;
  return imagePreviewUrl;
};
