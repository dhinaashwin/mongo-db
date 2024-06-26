import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/items')
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <li key={item._id}>{item.name} - {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
