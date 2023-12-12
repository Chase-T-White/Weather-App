// If permitted, grabbing user location for local weather request

export default function grabUserLocation() {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          resolve([lat, lng]);
        },
        (error) => {
          reject("Could not get your location");
        }
      );
    } else {
      reject("Geolocation is not supported by this browser");
    }
  });
}
