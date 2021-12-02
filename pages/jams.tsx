import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import { fetchJams } from '../helpers/fetchJams';

const jamsData = fetchJams();

export default function Jams() {
  const [jams, setJams] = useState([]);

  jamsData.then(result => {
    setJams(result);
  });

  return (
    <main>
      <h1>DevJam</h1>
      <Navbar />
      <h2>Jams</h2>
      {jams.length > 0 ? `We have ${jams.length} Jams` : 'No Jams'}

      <ul>
        {jams.map(jam => (
          <li key={jam.id}>{jam.name}</li>
        ))}
      </ul>
    </main>
  );
}
