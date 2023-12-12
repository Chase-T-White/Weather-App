export function checkStorage(setLocationsList) {
  const localStorageLocations = window.localStorage.getItem("locations");

  if (localStorageLocations === null) return;

  return setLocationsList(JSON.parse(localStorageLocations));
}

export function updateStorage(updatedList) {
  return window.localStorage.setItem("locations", JSON.stringify(updatedList));
}
