import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInventory } from './InventoryContext';

const CreateInventory = () => {
  const [item, setItem] = useState({
    name: '',
    totalStock: '',
    price: '',
    description: '',
  });

  const navigate = useNavigate();
  const { addItemToInventory } = useInventory();

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new item to the inventory
    addInventoryItem(item);

    // Reset the form after submission
    setItem({
      name: '',
      totalStock: '',
      price: '',
      description: '',
    });

    // Navigate back to the inventory listing
    navigate('/inventory');
  };

  return (
    <div>
      <h2>Create Inventory Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            placeholder='Enter item name'
            value={item.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Total Stock:</label>
          <input
            type='number'
            name='totalStock'
            placeholder='Enter total stock'
            value={item.totalStock}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label> Price (NGN):</label>
          <input
            type='number'
            name='price'
            placeholder='Enter price'
            value={item.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name='description'
            placeholder='Enter item description'
            value={item.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit'>Create Item</button>
      </form>
      <button onClick={() => navigate('/inventory')}>
        Back to Inventory Listing
      </button>
    </div>
  );
};

export default CreateInventory;
