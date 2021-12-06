const fs = import('fs');

let pets = require('/petsData.json');

export const petsRepo = {
  getAll: () => pets,
};

//private helper functions
function saveData() {
  fs.writeFileSync('./petsData.json', JSON.stringify(pets, null, 4));
}
