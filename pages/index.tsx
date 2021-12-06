import React, { useState } from 'react';
import Link from 'next/link';
// import { fetchPets } from '../helpers/fetchPets';
import { Navbar } from '../components/Navbar';
import AddPetForm from '../components/AddPetForm';

// const petsData = petsRepo.getAll();
// const petsData = fetchPets();

export default function Home() {
  const [pets, setPets] = useState([
    { id: 1, name: 'Nova' },
    { id: 2, name: 'Arya' },
    { id: 3, name: 'Pippin' },
  ]);

  const [idForPets, setIdForPets] = useState(pets.length + 1);

  // if we want to load the pets from the json
  // petsData.then(result => {
  //   setPets(result);
  // });

  function addPets(petName: string) {
    console.log('adding pet:', petName);
    setPets([
      ...pets,
      {
        id: idForPets,
        name: petName,
      },
    ]);
    setIdForPets(prevIdForPets => prevIdForPets + 1);
  }

  function removePet(petId: number) {
    console.log('remove pet:', petId);
    setPets([...pets].filter(pet => pet.id !== petId));
  }

  return (
    <main>
      <h1>DevJam</h1>
      <Navbar />

      <h2>Home</h2>
      <AddPetForm addPets={addPets} />
      <ul className="pets">
        {pets.map(pet => (
          <li key={pet.id}>
            {pet.name}
            <button type="button" onClick={() => removePet(pet.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
