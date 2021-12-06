export async function fetchPets() {
  console.log('FETCHING PETS');
  const response = await fetch('/pets.json');
  const data = await response.json();
  return data;
}
