import React, { useState } from 'react';

function AddPetForm(props) {
  const [petNameInput, setPetNameInput] = useState('');

  function updateAddPet(event) {
    setPetNameInput(event.target.value);
  }

  function submitAddPetForm(event) {
    event.preventDefault();
    if (petNameInput.trim().length === 0) {
      return;
    }
    props.addPets(petNameInput);

    setPetNameInput('');
  }

  return (
    <div>
      <form action="#" onSubmit={submitAddPetForm}>
        <input
          type="text"
          value={petNameInput}
          placeholder="Add Pet"
          onChange={updateAddPet}
        />
      </form>
    </div>
  );
}

export default AddPetForm;
