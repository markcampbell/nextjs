import React, { useState } from 'react';
import Link from 'next/link';
import { fetchPets } from '../helpers/fetchPets';
import { Navbar } from '../components/Navbar';

const petsData = fetchPets();

export default function Home() {
  const [pets, setPets] = useState([]);

  petsData.then(result => {
    setPets(result);
  });

  return (
    <main>
      <h1>DevJam</h1>
      <Navbar />

      <h2>Home</h2>
      <ul>
        {pets.map(pet => (
          <li key={pet.id}>{pet.name}</li>
        ))}
      </ul>
    </main>
  );
}
