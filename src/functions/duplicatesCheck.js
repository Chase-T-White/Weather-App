export default function duplicatesCheck(locations, search) {
  const duplicatesArray = locations.filter(
    (location) => location.name.toLowerCase() === search.toLowerCase()
  );

  return duplicatesArray.length > 0;
}
