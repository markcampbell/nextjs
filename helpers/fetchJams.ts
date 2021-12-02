export async function fetchJams() {
  const response = await fetch('/jams.json');
  const data = await response.json();
  return data;
}
