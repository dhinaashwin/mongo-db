import React, { useState } from 'react';
import axios from 'axios';

const AddItem = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = { name, quantity: Number(quantity) };

    axios.post('http://localhost:5000/items', newItem)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItem;
